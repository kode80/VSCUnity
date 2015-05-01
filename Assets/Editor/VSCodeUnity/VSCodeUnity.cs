//  Copyright (c) 2015, Ben Hopkins (kode80)
//  All rights reserved.
//  
//  Redistribution and use in source and binary forms, with or without modification, 
//  are permitted provided that the following conditions are met:
//  
//  1. Redistributions of source code must retain the above copyright notice, 
//     this list of conditions and the following disclaimer.
//  
//  2. Redistributions in binary form must reproduce the above copyright notice, 
//     this list of conditions and the following disclaimer in the documentation 
//     and/or other materials provided with the distribution.
//  
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
//  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
//  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL 
//  THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
//  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT 
//  OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
//  HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
//  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

using UnityEngine;
using UnityEditor;
using System.IO;
using System.Text;

public class VSCodeUnity
{
	private const string VS11VersionString = "Microsoft Visual Studio Solution File, Format Version 11.00\r\n" +
											 "# Visual Studio 2008\r\n";
	
	private const string VS12VersionString = "\r\nMicrosoft Visual Studio Solution File, Format Version 12.00\r\n" +
											 "# Visual Studio 2012";

	[MenuItem("VS Code/Update project for Visual Studio Code")]
	private static void UpdateProjectForVSC()
	{
		string message = "";
		string path = Application.dataPath + "/..";

		DirectoryInfo directoryInfo = new DirectoryInfo( path);
		FileInfo[] files = directoryInfo.GetFiles();
		bool noSolutionFilesFound = true;

		foreach( FileInfo fileInfo in files)
		{
			if( fileInfo.Extension == ".sln")
			{
				noSolutionFilesFound = false;

				StreamReader reader = new StreamReader( fileInfo.ToString());
				string fileString = reader.ReadToEnd();
				reader.Close();

				if( fileString.Contains( VS11VersionString))
				{
					message += "\n Converting sln: " + fileInfo.Name;
					fileString = fileString.Replace( VS11VersionString, VS12VersionString);

					Stream stream = File.OpenWrite( fileInfo.ToString());
					StreamWriter writer = new StreamWriter( stream, new UTF8Encoding( true));
					writer.Write( fileString);
					writer.Close();

					if( fileInfo.Name.Contains( "-csharp"))
					{
						string oldPath = fileInfo.ToString();
						string newPath = oldPath.Replace( ".sln", ".sln.hide");
						File.Move( oldPath, newPath);
					}
				}
				else if( fileString.Contains( VS12VersionString))
				{
					message += "\n Skipping converted sln: " + fileInfo.Name;
				}
				else
				{
					message += "\n Skipping unknown sln format: " + fileInfo.Name;
				}
			}
		}

		if( noSolutionFilesFound)
		{
			message = "No .sln files found in project. Open a script in MonoDevelop to autogenerate .sln " +
					  "files and then try updating for Visual Studio Code again.";
		}

		EditorUtility.DisplayDialog( "Update project", message, "Ok");
	}
	
	[MenuItem("VS Code/Add Unity symbol highlighting to Visual Studio Code")]
	private static void AddUnitySymbolsToVSC()
	{
		EditorUtility.DisplayDialog( "Add Unity symbols", "Test", "Ok");
	}
}
