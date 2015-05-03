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
using System;
using System.IO;
using System.Text;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;

public class VSCodeUnity
{
	private const string VS11VersionString = "Microsoft Visual Studio Solution File, Format Version 11.00\r\n" +
											 "# Visual Studio 2008\r\n";
	
	private const string VS12VersionString = "\r\nMicrosoft Visual Studio Solution File, Format Version 12.00\r\n" +
											 "# Visual Studio 2012";
											 
	private const string VSCCSharpDefPathOSX = "/Applications/Visual Studio Code.app/Contents/Resources/app/plugins/vs.language.csharp/csharpDef.js";
	private const string VSCPluginsPathOSX = "/Applications/Visual Studio Code.app/Contents/Resources/app/plugins";
	private const string UnityShaderPluginName = "vs.language.shader";
	private const string ModifiedFilesBackupExtension = ".VSCModifiedOriginal"; 
	
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
		string cSharpDefPath = null;
		string message = null;
		
		if( Application.platform == RuntimePlatform.OSXEditor)
		{
			cSharpDefPath = FindCSharpDefPathOSX();
		}
		else
		{
			message = "Adding Unity symbols to Visual Studio Code is not currently supported on " + Application.platform;
		}
		
		bool supportedPlatform = message == null;
		if( supportedPlatform)
		{
			if( cSharpDefPath == null)
			{
				message = "Couldn't find Visual Studio Code application or CSharpDef";
			}
			else
			{
				RestoreModifiedFileBackupIfExists( cSharpDefPath);
				BackupFileBeforeModification( cSharpDefPath);
				
				List<string> classNames = GetPublicClassesInNamespaces( "UnityEngine", "UnityEditor");
				bool success = AddClassNamesToCSharpDef( classNames, cSharpDefPath);
				
				message = success ? "Successfully added Unity symbols to Visual Studio Code" :
									"Couldn't add Unity symbols to Visual Studio Code, couldn't find keywords array";
			}
		}
		
		EditorUtility.DisplayDialog( "Add Unity symbols", message, "Ok");
	}
	
	[MenuItem("VS Code/Add Unity shader plugin to Visual Studio Code")]
	private static void AddUnityShaderPluginToVSC()
	{
		string message = null;
		string pluginSourcePath = null;
		string pluginInstallPath = null;
		
		if( Application.platform == RuntimePlatform.OSXEditor)
		{
			pluginSourcePath = Application.dataPath + "/../VSCUnity/" + UnityShaderPluginName;
			pluginInstallPath = VSCPluginsPathOSX + "/" + UnityShaderPluginName;
		}
		else
		{
			message = "Adding Unity shader plugin to Visual Studio Code is not currently supported on " + Application.platform;
		}
		
		bool supportedPlatform = message == null;
		if( supportedPlatform)
		{
			if( Directory.Exists( pluginSourcePath))
			{	
				if( Directory.Exists( pluginInstallPath))
				{
					Directory.Delete( pluginInstallPath, true);	
				}
				
				CopyDirectory.Copy( pluginSourcePath, pluginInstallPath);
				
				message = "Successfully added Unity shader plugin to Visual Studio Code";
			}
			else
			{
				message = "Couldn't find the Unity shader plugin:\n\n" + pluginSourcePath;
			}
		}
		
		EditorUtility.DisplayDialog( "Add Unity shader plugin", message, "Ok");
	}
	
	private static string FindCSharpDefPathOSX()
	{
		if( File.Exists( VSCCSharpDefPathOSX))
		{
			return VSCCSharpDefPathOSX;
		}
		else 
		{
			string userPath = Environment.GetFolderPath( Environment.SpecialFolder.Personal);
			string cSharpDefUserPath = userPath + VSCCSharpDefPathOSX;
			
			if( File.Exists( cSharpDefUserPath))
			{
				return cSharpDefUserPath;
			}
		}
		
		return null;
	}
	
	private static List<string> GetPublicClassesInNamespaces( params string[] namespaces)
	{
		List<string> classNames = new List<string>();
		Assembly[] assemblies = AppDomain.CurrentDomain.GetAssemblies();
		IEnumerable<Type> types;
		string currentNamespace;
		string className;
		
		for( int i=0; i<namespaces.Length; i++)
		{
			currentNamespace = namespaces[ i];
			types = assemblies.SelectMany(t => t.GetTypes())
							  .Where(t => (t.IsClass || t.IsAnsiClass) && t.Namespace == currentNamespace && t.IsPublic);
			
			foreach( Type type in types)
			{
				className = type.ToString().Replace( currentNamespace + ".", "");
				classNames.Add( className);
			}
		}
		
		return classNames;
	}
	
	private static void RestoreModifiedFileBackupIfExists( string originalPath)
	{
		string backupPath = originalPath + ModifiedFilesBackupExtension;
		if( File.Exists( backupPath))
		{
			File.Copy( backupPath, originalPath, true);
			File.Delete( backupPath);
		}
	}
	
	private static void BackupFileBeforeModification( string originalPath)
	{
		string backupPath = originalPath + ModifiedFilesBackupExtension;
		File.Copy( originalPath, backupPath, true);
	}
	
	private static bool AddClassNamesToCSharpDef( List<string> classNames, string cSharpDefPath)
	{
		StreamReader reader = new StreamReader( cSharpDefPath);
		string cSharpDef = reader.ReadToEnd();
		reader.Close();
		
		string keywordsArrayMarker = "keywords: [";
		if( cSharpDef.IndexOf( keywordsArrayMarker) > -1)
		{
			string linePrefix = "\r\n\t\t\t";
			string keywordString = keywordsArrayMarker + linePrefix + "//-- BEGIN UNITY SYMBOLS --//";
			
			foreach( string className in classNames)
			{
				keywordString += linePrefix + "\'" + className + "\',";
			}
			
			keywordString += linePrefix + "//-- END UNITY SYMBOLS --//";
			
			cSharpDef = cSharpDef.Replace( keywordsArrayMarker, keywordString);
			
			Stream stream = File.OpenWrite( cSharpDefPath);
			StreamWriter writer = new StreamWriter( stream, new UTF8Encoding( true));
			writer.Write( cSharpDef);
			writer.Close();
			
			return true;
		}
		
		return false;
	}
}
