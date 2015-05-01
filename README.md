# VSCUnity
Unity3D editor plugin to make Unity projects Visual Studio Code compatible.

Add to /Assets/Editor/VCSUnity and then choose "Update project for Visual Studio Code" from the "VS Code" menu.

Choose "Add Unity symbol highlighting to Visual Studio Code" to update Visual Studio Code's C# syntax highlighting with all Unity specific types.

Currently just searchs the project folder for .sln files and replaces the VS2008 header with the VS2012 one, then appends .hide to the -csharp solution's extension so that Visual Studio Code knows which one to open. MonoDevelop/Unity doesn't seem to care about either change but this is a quick hack so I won't be held responsible for loss of life or limb. ;)  

Prompted from @prime_31's note that Xamerin projects open correctly in Visual Studio Code.
