'use strict';
define(["require", "exports", 'monaco' ], function (require, exports, monaco) {
	var Shader80Completion = (function() 
	{
		function Shader80Completion() 
		{
			//this.test = "";
		}

		Shader80Completion.prototype.CompletionsForString = function( word)
		{
			return [{
	                currentWord: word,
	                suggestions: [ {
	                        codeSnippet: "kode80",
	                        label: "kode80",
	                        typeLabel: "reverse engineering Visual Studio Code's plugin system",
	                        documentationLabel: "for VSCUnity shader plugin awesomness!",
	                        highlights: [],
	                        type: "method"
	                    }]
	            	}];
		};

		return Shader80Completion;
	})();

	return Shader80Completion;
});