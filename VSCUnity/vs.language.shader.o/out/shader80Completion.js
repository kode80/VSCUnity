'use strict';
define(["require", "exports", 'monaco' ], function (require, exports, monaco) {
	var Shader80Completion = (function() 
	{
		function Shader80Completion() 
		{
			var tree = new Object();

			for( var key in completions)
			{
				this.AddWordToTree( tree, key);
			}

			this.completions = completions;
			this.tree = tree;
		}

		Shader80Completion.prototype.CompletionsForString = function( str)
		{
			var words = this.GetWordsFromTree( this.tree, str);
			var completions = new Array();

			for( var i=0; i<words.length; i++)
			{
				completions.push( this.completions[ words[ i]]);
			}

			return [{
	                currentWord: str,
	                suggestions: completions
	            	}];
		};

		Shader80Completion.prototype.AddWordToTree = function( tree, word)
		{
			var currentLettersObj = tree;
			var letter;

			for( var i=0; i<word.length; i++)
			{
				letter = word.charAt( i);

				if( typeof currentLettersObj[ letter] === "undefined")
				{
					currentLettersObj[ letter] = new Object();
					currentLettersObj[ letter].lettersObj = new Object();
					currentLettersObj[ letter].words = new Array();
				}

				currentLettersObj[ letter].words.push( word);
				currentLettersObj = currentLettersObj[ letter].lettersObj;
			}
		}

		Shader80Completion.prototype.GetWordsFromTree = function( tree, word)
		{
			var currentLettersObj = tree;
			var letter;
			var words;

			for( var i=0; i<word.length; i++)
			{
				letter = word.charAt( i);

				if( typeof currentLettersObj[ letter] === "undefined")
				{
					return [];
				}

				words = currentLettersObj[ letter].words;
				currentLettersObj = currentLettersObj[ letter].lettersObj;
			}

			return words;
		}

		var completions = {
			"ATTR0": {
				codeSnippet: "ATTR0",
				label: "ATTR0",
				typeLabel: "ATTR0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR1": {
				codeSnippet: "ATTR1",
				label: "ATTR1",
				typeLabel: "ATTR1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR2": {
				codeSnippet: "ATTR2",
				label: "ATTR2",
				typeLabel: "ATTR2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR3": {
				codeSnippet: "ATTR3",
				label: "ATTR3",
				typeLabel: "ATTR3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR4": {
				codeSnippet: "ATTR4",
				label: "ATTR4",
				typeLabel: "ATTR4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR5": {
				codeSnippet: "ATTR5",
				label: "ATTR5",
				typeLabel: "ATTR5",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR6": {
				codeSnippet: "ATTR6",
				label: "ATTR6",
				typeLabel: "ATTR6",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR7": {
				codeSnippet: "ATTR7",
				label: "ATTR7",
				typeLabel: "ATTR7",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR8": {
				codeSnippet: "ATTR8",
				label: "ATTR8",
				typeLabel: "ATTR8",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR9": {
				codeSnippet: "ATTR9",
				label: "ATTR9",
				typeLabel: "ATTR9",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR10": {
				codeSnippet: "ATTR10",
				label: "ATTR10",
				typeLabel: "ATTR10",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR11": {
				codeSnippet: "ATTR11",
				label: "ATTR11",
				typeLabel: "ATTR11",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR12": {
				codeSnippet: "ATTR12",
				label: "ATTR12",
				typeLabel: "ATTR12",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR13": {
				codeSnippet: "ATTR13",
				label: "ATTR13",
				typeLabel: "ATTR13",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR14": {
				codeSnippet: "ATTR14",
				label: "ATTR14",
				typeLabel: "ATTR14",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ATTR15": {
				codeSnippet: "ATTR15",
				label: "ATTR15",
				typeLabel: "ATTR15",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"AlphaBlendEnable": {
				codeSnippet: "AlphaBlendEnable",
				label: "AlphaBlendEnable",
				typeLabel: "AlphaBlendEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Ambient": {
				codeSnippet: "Ambient",
				label: "Ambient",
				typeLabel: "Ambient",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"BCOL0": {
				codeSnippet: "BCOL0",
				label: "BCOL0",
				typeLabel: "BCOL0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"BCOL1": {
				codeSnippet: "BCOL1",
				label: "BCOL1",
				typeLabel: "BCOL1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"BINORMAL0": {
				codeSnippet: "BINORMAL0",
				label: "BINORMAL0",
				typeLabel: "BINORMAL0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"BlendEnable": {
				codeSnippet: "BlendEnable",
				label: "BlendEnable",
				typeLabel: "BlendEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"BlendState": {
				codeSnippet: "BlendState",
				label: "BlendState",
				typeLabel: "BlendState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COL0": {
				codeSnippet: "COL0",
				label: "COL0",
				typeLabel: "COL0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COL1": {
				codeSnippet: "COL1",
				label: "COL1",
				typeLabel: "COL1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COLOR": {
				codeSnippet: "COLOR",
				label: "COLOR",
				typeLabel: "COLOR",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COLOR0": {
				codeSnippet: "COLOR0",
				label: "COLOR0",
				typeLabel: "COLOR0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COLOR1": {
				codeSnippet: "COLOR1",
				label: "COLOR1",
				typeLabel: "COLOR1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COLOR2": {
				codeSnippet: "COLOR2",
				label: "COLOR2",
				typeLabel: "COLOR2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"COLOR3": {
				codeSnippet: "COLOR3",
				label: "COLOR3",
				typeLabel: "COLOR3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Clamp": {
				codeSnippet: "Clamp",
				label: "Clamp",
				typeLabel: "Clamp",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"CullFaceEnable": {
				codeSnippet: "CullFaceEnable",
				label: "CullFaceEnable",
				typeLabel: "CullFaceEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"CullMode": {
				codeSnippet: "CullMode",
				label: "CullMode",
				typeLabel: "CullMode",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DEPR": {
				codeSnippet: "DEPR",
				label: "DEPR",
				typeLabel: "DEPR",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DEPTH": {
				codeSnippet: "DEPTH",
				label: "DEPTH",
				typeLabel: "DEPTH",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DIFFUSE": {
				codeSnippet: "DIFFUSE",
				label: "DIFFUSE",
				typeLabel: "DIFFUSE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthEnable": {
				codeSnippet: "DepthEnable",
				label: "DepthEnable",
				typeLabel: "DepthEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthEnabling": {
				codeSnippet: "DepthEnabling",
				label: "DepthEnabling",
				typeLabel: "DepthEnabling",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthFunc": {
				codeSnippet: "DepthFunc",
				label: "DepthFunc",
				typeLabel: "DepthFunc",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthMask": {
				codeSnippet: "DepthMask",
				label: "DepthMask",
				typeLabel: "DepthMask",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthStencilState": {
				codeSnippet: "DepthStencilState",
				label: "DepthStencilState",
				typeLabel: "DepthStencilState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthTestEnable": {
				codeSnippet: "DepthTestEnable",
				label: "DepthTestEnable",
				typeLabel: "DepthTestEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DepthWriteMask": {
				codeSnippet: "DepthWriteMask",
				label: "DepthWriteMask",
				typeLabel: "DepthWriteMask",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DisableBlend": {
				codeSnippet: "DisableBlend",
				label: "DisableBlend",
				typeLabel: "DisableBlend",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"DisableCulling": {
				codeSnippet: "DisableCulling",
				label: "DisableCulling",
				typeLabel: "DisableCulling",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ENVIRONMENT": {
				codeSnippet: "ENVIRONMENT",
				label: "ENVIRONMENT",
				typeLabel: "ENVIRONMENT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"FOGC": {
				codeSnippet: "FOGC",
				label: "FOGC",
				typeLabel: "FOGC",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"FOGP": {
				codeSnippet: "FOGP",
				label: "FOGP",
				typeLabel: "FOGP",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"FragmentProgram": {
				codeSnippet: "FragmentProgram",
				label: "FragmentProgram",
				typeLabel: "FragmentProgram",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"HPOS": {
				codeSnippet: "HPOS",
				label: "HPOS",
				typeLabel: "HPOS",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"IN": {
				codeSnippet: "IN",
				label: "IN",
				typeLabel: "IN",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LEqual": {
				codeSnippet: "LEqual",
				label: "LEqual",
				typeLabel: "LEqual",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LINE": {
				codeSnippet: "LINE",
				label: "LINE",
				typeLabel: "LINE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LINE_ADJ": {
				codeSnippet: "LINE_ADJ",
				label: "LINE_ADJ",
				typeLabel: "LINE_ADJ",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LINE_OUT": {
				codeSnippet: "LINE_OUT",
				label: "LINE_OUT",
				typeLabel: "LINE_OUT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LPROJ_COORD": {
				codeSnippet: "LPROJ_COORD",
				label: "LPROJ_COORD",
				typeLabel: "LPROJ_COORD",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LessEqual": {
				codeSnippet: "LessEqual",
				label: "LessEqual",
				typeLabel: "LessEqual",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Linear": {
				codeSnippet: "Linear",
				label: "Linear",
				typeLabel: "Linear",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"LinearMipMapLinear": {
				codeSnippet: "LinearMipMapLinear",
				label: "LinearMipMapLinear",
				typeLabel: "LinearMipMapLinear",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"MIN_MAG_MIP_LINEAR": {
				codeSnippet: "MIN_MAG_MIP_LINEAR",
				label: "MIN_MAG_MIP_LINEAR",
				typeLabel: "MIN_MAG_MIP_LINEAR",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"NORMAL": {
				codeSnippet: "NORMAL",
				label: "NORMAL",
				typeLabel: "NORMAL",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"NRML": {
				codeSnippet: "NRML",
				label: "NRML",
				typeLabel: "NRML",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"None": {
				codeSnippet: "None",
				label: "None",
				typeLabel: "None",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"OUT": {
				codeSnippet: "OUT",
				label: "OUT",
				typeLabel: "OUT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"POINT": {
				codeSnippet: "POINT",
				label: "POINT",
				typeLabel: "POINT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"POINT_OUT": {
				codeSnippet: "POINT_OUT",
				label: "POINT_OUT",
				typeLabel: "POINT_OUT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"POSITION": {
				codeSnippet: "POSITION",
				label: "POSITION",
				typeLabel: "POSITION",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"PSIZ": {
				codeSnippet: "PSIZ",
				label: "PSIZ",
				typeLabel: "PSIZ",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"PixelShader": {
				codeSnippet: "PixelShader",
				label: "PixelShader",
				typeLabel: "PixelShader",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Position": {
				codeSnippet: "Position",
				label: "Position",
				typeLabel: "Position",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"RENDERCOLORTARGET": {
				codeSnippet: "RENDERCOLORTARGET",
				label: "RENDERCOLORTARGET",
				typeLabel: "RENDERCOLORTARGET",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"RENDERDEPTHSTENCILTARGET": {
				codeSnippet: "RENDERDEPTHSTENCILTARGET",
				label: "RENDERDEPTHSTENCILTARGET",
				typeLabel: "RENDERDEPTHSTENCILTARGET",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"RasterizerState": {
				codeSnippet: "RasterizerState",
				label: "RasterizerState",
				typeLabel: "RasterizerState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Repeat": {
				codeSnippet: "Repeat",
				label: "Repeat",
				typeLabel: "Repeat",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"STANDARDSGLOBAL": {
				codeSnippet: "STANDARDSGLOBAL",
				label: "STANDARDSGLOBAL",
				typeLabel: "STANDARDSGLOBAL",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_CLIPDISTANCE": {
				codeSnippet: "SV_CLIPDISTANCE",
				label: "SV_CLIPDISTANCE",
				typeLabel: "SV_CLIPDISTANCE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_COVERAGE": {
				codeSnippet: "SV_COVERAGE",
				label: "SV_COVERAGE",
				typeLabel: "SV_COVERAGE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_CULLDISTANCE": {
				codeSnippet: "SV_CULLDISTANCE",
				label: "SV_CULLDISTANCE",
				typeLabel: "SV_CULLDISTANCE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_DEPTH": {
				codeSnippet: "SV_DEPTH",
				label: "SV_DEPTH",
				typeLabel: "SV_DEPTH",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_DEPTHGREATEREQUAL": {
				codeSnippet: "SV_DEPTHGREATEREQUAL",
				label: "SV_DEPTHGREATEREQUAL",
				typeLabel: "SV_DEPTHGREATEREQUAL",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_DEPTHLESSEQUAL": {
				codeSnippet: "SV_DEPTHLESSEQUAL",
				label: "SV_DEPTHLESSEQUAL",
				typeLabel: "SV_DEPTHLESSEQUAL",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_DISPATCHTHREADID": {
				codeSnippet: "SV_DISPATCHTHREADID",
				label: "SV_DISPATCHTHREADID",
				typeLabel: "SV_DISPATCHTHREADID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_DOMAINLOCATION": {
				codeSnippet: "SV_DOMAINLOCATION",
				label: "SV_DOMAINLOCATION",
				typeLabel: "SV_DOMAINLOCATION",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_GROUPID": {
				codeSnippet: "SV_GROUPID",
				label: "SV_GROUPID",
				typeLabel: "SV_GROUPID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_GROUPINDEX": {
				codeSnippet: "SV_GROUPINDEX",
				label: "SV_GROUPINDEX",
				typeLabel: "SV_GROUPINDEX",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_GROUPTHREADID": {
				codeSnippet: "SV_GROUPTHREADID",
				label: "SV_GROUPTHREADID",
				typeLabel: "SV_GROUPTHREADID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_GSINSTANCEID": {
				codeSnippet: "SV_GSINSTANCEID",
				label: "SV_GSINSTANCEID",
				typeLabel: "SV_GSINSTANCEID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_INNERCOVERAGE": {
				codeSnippet: "SV_INNERCOVERAGE",
				label: "SV_INNERCOVERAGE",
				typeLabel: "SV_INNERCOVERAGE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_INSIDETESSFACTOR": {
				codeSnippet: "SV_INSIDETESSFACTOR",
				label: "SV_INSIDETESSFACTOR",
				typeLabel: "SV_INSIDETESSFACTOR",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_INSTANCEID": {
				codeSnippet: "SV_INSTANCEID",
				label: "SV_INSTANCEID",
				typeLabel: "SV_INSTANCEID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_ISFRONTFACE": {
				codeSnippet: "SV_ISFRONTFACE",
				label: "SV_ISFRONTFACE",
				typeLabel: "SV_ISFRONTFACE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_OUTPUTCONTROLPOINTID": {
				codeSnippet: "SV_OUTPUTCONTROLPOINTID",
				label: "SV_OUTPUTCONTROLPOINTID",
				typeLabel: "SV_OUTPUTCONTROLPOINTID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_POSITION": {
				codeSnippet: "SV_POSITION",
				label: "SV_POSITION",
				typeLabel: "SV_POSITION",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_PRIMITIVEID": {
				codeSnippet: "SV_PRIMITIVEID",
				label: "SV_PRIMITIVEID",
				typeLabel: "SV_PRIMITIVEID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_RENDERTARGETARRAYINDEX": {
				codeSnippet: "SV_RENDERTARGETARRAYINDEX",
				label: "SV_RENDERTARGETARRAYINDEX",
				typeLabel: "SV_RENDERTARGETARRAYINDEX",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_SAMPLEINDEX": {
				codeSnippet: "SV_SAMPLEINDEX",
				label: "SV_SAMPLEINDEX",
				typeLabel: "SV_SAMPLEINDEX",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_STENCILREF": {
				codeSnippet: "SV_STENCILREF",
				label: "SV_STENCILREF",
				typeLabel: "SV_STENCILREF",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_TARGET": {
				codeSnippet: "SV_TARGET",
				label: "SV_TARGET",
				typeLabel: "SV_TARGET",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_TESSFACTOR": {
				codeSnippet: "SV_TESSFACTOR",
				label: "SV_TESSFACTOR",
				typeLabel: "SV_TESSFACTOR",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_VERTEXID": {
				codeSnippet: "SV_VERTEXID",
				label: "SV_VERTEXID",
				typeLabel: "SV_VERTEXID",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SV_VIEWPORTARRAYINDEX": {
				codeSnippet: "SV_VIEWPORTARRAYINDEX",
				label: "SV_VIEWPORTARRAYINDEX",
				typeLabel: "SV_VIEWPORTARRAYINDEX",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetBlendState": {
				codeSnippet: "SetBlendState",
				label: "SetBlendState",
				typeLabel: "SetBlendState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetDepthStencilState": {
				codeSnippet: "SetDepthStencilState",
				label: "SetDepthStencilState",
				typeLabel: "SetDepthStencilState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetGeometryShader": {
				codeSnippet: "SetGeometryShader",
				label: "SetGeometryShader",
				typeLabel: "SetGeometryShader",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetPixelShader": {
				codeSnippet: "SetPixelShader",
				label: "SetPixelShader",
				typeLabel: "SetPixelShader",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetRasterizerState": {
				codeSnippet: "SetRasterizerState",
				label: "SetRasterizerState",
				typeLabel: "SetRasterizerState",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SetVertexShader": {
				codeSnippet: "SetVertexShader",
				label: "SetVertexShader",
				typeLabel: "SetVertexShader",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Specular": {
				codeSnippet: "Specular",
				label: "Specular",
				typeLabel: "Specular",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"SpecularPower": {
				codeSnippet: "SpecularPower",
				label: "SpecularPower",
				typeLabel: "SpecularPower",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT0": {
				codeSnippet: "TANGENT0",
				label: "TANGENT0",
				typeLabel: "TANGENT0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT1": {
				codeSnippet: "TANGENT1",
				label: "TANGENT1",
				typeLabel: "TANGENT1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT2": {
				codeSnippet: "TANGENT2",
				label: "TANGENT2",
				typeLabel: "TANGENT2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT3": {
				codeSnippet: "TANGENT3",
				label: "TANGENT3",
				typeLabel: "TANGENT3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT4": {
				codeSnippet: "TANGENT4",
				label: "TANGENT4",
				typeLabel: "TANGENT4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT5": {
				codeSnippet: "TANGENT5",
				label: "TANGENT5",
				typeLabel: "TANGENT5",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT6": {
				codeSnippet: "TANGENT6",
				label: "TANGENT6",
				typeLabel: "TANGENT6",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TANGENT7": {
				codeSnippet: "TANGENT7",
				label: "TANGENT7",
				typeLabel: "TANGENT7",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX0": {
				codeSnippet: "TEX0",
				label: "TEX0",
				typeLabel: "TEX0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX1": {
				codeSnippet: "TEX1",
				label: "TEX1",
				typeLabel: "TEX1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX2": {
				codeSnippet: "TEX2",
				label: "TEX2",
				typeLabel: "TEX2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX3": {
				codeSnippet: "TEX3",
				label: "TEX3",
				typeLabel: "TEX3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX4": {
				codeSnippet: "TEX4",
				label: "TEX4",
				typeLabel: "TEX4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX5": {
				codeSnippet: "TEX5",
				label: "TEX5",
				typeLabel: "TEX5",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX6": {
				codeSnippet: "TEX6",
				label: "TEX6",
				typeLabel: "TEX6",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEX7": {
				codeSnippet: "TEX7",
				label: "TEX7",
				typeLabel: "TEX7",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD0": {
				codeSnippet: "TEXCOORD0",
				label: "TEXCOORD0",
				typeLabel: "TEXCOORD0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD1": {
				codeSnippet: "TEXCOORD1",
				label: "TEXCOORD1",
				typeLabel: "TEXCOORD1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD2": {
				codeSnippet: "TEXCOORD2",
				label: "TEXCOORD2",
				typeLabel: "TEXCOORD2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD3": {
				codeSnippet: "TEXCOORD3",
				label: "TEXCOORD3",
				typeLabel: "TEXCOORD3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD4": {
				codeSnippet: "TEXCOORD4",
				label: "TEXCOORD4",
				typeLabel: "TEXCOORD4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD5": {
				codeSnippet: "TEXCOORD5",
				label: "TEXCOORD5",
				typeLabel: "TEXCOORD5",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD6": {
				codeSnippet: "TEXCOORD6",
				label: "TEXCOORD6",
				typeLabel: "TEXCOORD6",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TEXCOORD7": {
				codeSnippet: "TEXCOORD7",
				label: "TEXCOORD7",
				typeLabel: "TEXCOORD7",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TRIANGLE": {
				codeSnippet: "TRIANGLE",
				label: "TRIANGLE",
				typeLabel: "TRIANGLE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TRIANGLE_ADJ": {
				codeSnippet: "TRIANGLE_ADJ",
				label: "TRIANGLE_ADJ",
				typeLabel: "TRIANGLE_ADJ",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"TRIANGLE_OUT": {
				codeSnippet: "TRIANGLE_OUT",
				label: "TRIANGLE_OUT",
				typeLabel: "TRIANGLE_OUT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"VIEWPORTPIXELSIZE": {
				codeSnippet: "VIEWPORTPIXELSIZE",
				label: "VIEWPORTPIXELSIZE",
				typeLabel: "VIEWPORTPIXELSIZE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"VertexProgram": {
				codeSnippet: "VertexProgram",
				label: "VertexProgram",
				typeLabel: "VertexProgram",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"VertexShader": {
				codeSnippet: "VertexShader",
				label: "VertexShader",
				typeLabel: "VertexShader",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"WPOS": {
				codeSnippet: "WPOS",
				label: "WPOS",
				typeLabel: "WPOS",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"Wrap": {
				codeSnippet: "Wrap",
				label: "Wrap",
				typeLabel: "Wrap",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ZEnable": {
				codeSnippet: "ZEnable",
				label: "ZEnable",
				typeLabel: "ZEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ZFunc": {
				codeSnippet: "ZFunc",
				label: "ZFunc",
				typeLabel: "ZFunc",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ZWriteEnable": {
				codeSnippet: "ZWriteEnable",
				label: "ZWriteEnable",
				typeLabel: "ZWriteEnable",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SEQ": {
				codeSnippet: "_SEQ",
				label: "_SEQ",
				typeLabel: "_SEQ",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SGE": {
				codeSnippet: "_SGE",
				label: "_SGE",
				typeLabel: "_SGE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SGT": {
				codeSnippet: "_SGT",
				label: "_SGT",
				typeLabel: "_SGT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SLE": {
				codeSnippet: "_SLE",
				label: "_SLE",
				typeLabel: "_SLE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SLT": {
				codeSnippet: "_SLT",
				label: "_SLT",
				typeLabel: "_SLT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"_SNE": {
				codeSnippet: "_SNE",
				label: "_SNE",
				typeLabel: "_SNE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"abs": {
				codeSnippet: "abs",
				label: "abs",
				typeLabel: "abs( x )",
				documentationLabel: "Absolute value of x .",
				highlights: [],
				type: "method"
			},
			"acos": {
				codeSnippet: "acos",
				label: "acos",
				typeLabel: "acos( x )",
				documentationLabel: "Arccosine of x in range [0, p], x in [–1, 1].",
				highlights: [],
				type: "method"
			},
			"application2vertex": {
				codeSnippet: "application2vertex",
				label: "application2vertex",
				typeLabel: "application2vertex",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"arbfp1": {
				codeSnippet: "arbfp1",
				label: "arbfp1",
				typeLabel: "arbfp1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"arbvp1": {
				codeSnippet: "arbvp1",
				label: "arbvp1",
				typeLabel: "arbvp1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"asin": {
				codeSnippet: "asin",
				label: "asin",
				typeLabel: "asin( x )",
				documentationLabel: "Arcsine of x in range [–p/2, p/2]; x should be in [–1, 1].",
				highlights: [],
				type: "method"
			},
			"atan": {
				codeSnippet: "atan",
				label: "atan",
				typeLabel: "atan( x )",
				documentationLabel: "Arctangent of x in range [–p/2, p/2].",
				highlights: [],
				type: "method"
			},
			"atan2": {
				codeSnippet: "atan2",
				label: "atan2",
				typeLabel: "atan2( y , x )",
				documentationLabel: "Arctangent of y / x in range [–p, p].",
				highlights: [],
				type: "method"
			},
			"bool": {
				codeSnippet: "bool",
				label: "bool",
				typeLabel: "bool",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ceil": {
				codeSnippet: "ceil",
				label: "ceil",
				typeLabel: "ceil( x )",
				documentationLabel: "Smallest integer not less than x .",
				highlights: [],
				type: "method"
			},
			"clamp": {
				codeSnippet: "clamp",
				label: "clamp",
				typeLabel: "clamp( x , a , b )",
				documentationLabel: "x clamped to the range [ a , b ] as follows:\n\nReturns a if x is less than a .\nReturns b if x is greater than b .\nReturns x otherwise.",
				highlights: [],
				type: "method"
			},
			"compile": {
				codeSnippet: "compile",
				label: "compile",
				typeLabel: "compile",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"const": {
				codeSnippet: "const",
				label: "const",
				typeLabel: "const",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"cos": {
				codeSnippet: "cos",
				label: "cos",
				typeLabel: "cos( x )",
				documentationLabel: "Cosine of x .",
				highlights: [],
				type: "method"
			},
			"cosh": {
				codeSnippet: "cosh",
				label: "cosh",
				typeLabel: "cosh( x )",
				documentationLabel: "Hyperbolic cosine of x .",
				highlights: [],
				type: "method"
			},
			"cross": {
				codeSnippet: "cross",
				label: "cross",
				typeLabel: "cross( A , B )",
				documentationLabel: "Cross product of vectors A and B ;\n\nA and B must be three-component vectors.",
				highlights: [],
				type: "method"
			},
			"cullmode": {
				codeSnippet: "cullmode",
				label: "cullmode",
				typeLabel: "cullmode",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ddx": {
				codeSnippet: "ddx",
				label: "ddx",
				typeLabel: "ddx( a )",
				documentationLabel: "Approximate partial derivative of a with respect to screen-space x coordinate.",
				highlights: [],
				type: "method"
			},
			"ddy": {
				codeSnippet: "ddy",
				label: "ddy",
				typeLabel: "ddy( a )",
				documentationLabel: "Approximate partial derivative of a with respect to screen-space y coordinate.",
				highlights: [],
				type: "method"
			},
			"degrees": {
				codeSnippet: "degrees",
				label: "degrees",
				typeLabel: "degrees( x )",
				documentationLabel: "Radian-to-degree conversion.",
				highlights: [],
				type: "method"
			},
			"discard": {
				codeSnippet: "discard",
				label: "discard",
				typeLabel: "discard",
				documentationLabel: "Euclidean distance between points pt1 and pt2 .",
				highlights: [],
				type: "method"
			},
			"distance": {
				codeSnippet: "distance",
				label: "distance",
				typeLabel: "distance( pt1 , pt2 )",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"do": {
				codeSnippet: "do",
				label: "do",
				typeLabel: "do",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"dot": {
				codeSnippet: "dot",
				label: "dot",
				typeLabel: "dot( A , B )",
				documentationLabel: "Dot product of vectors A and B .",
				highlights: [],
				type: "method"
			},
			"else": {
				codeSnippet: "else",
				label: "else",
				typeLabel: "else",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"exp": {
				codeSnippet: "exp",
				label: "exp",
				typeLabel: "exp( x )",
				documentationLabel: "Exponential function e x .",
				highlights: [],
				type: "method"
			},
			"exp2": {
				codeSnippet: "exp2",
				label: "exp2",
				typeLabel: "exp2( x )",
				documentationLabel: "Exponential function 2 x .",
				highlights: [],
				type: "method"
			},
			"f1tex1D": {
				codeSnippet: "f1tex1D",
				label: "f1tex1D",
				typeLabel: "f1tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1tex1Dproj": {
				codeSnippet: "f1tex1Dproj",
				label: "f1tex1Dproj",
				typeLabel: "f1tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1tex2D": {
				codeSnippet: "f1tex2D",
				label: "f1tex2D",
				typeLabel: "f1tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1tex2Dproj": {
				codeSnippet: "f1tex2Dproj",
				label: "f1tex2Dproj",
				typeLabel: "f1tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1tex3D": {
				codeSnippet: "f1tex3D",
				label: "f1tex3D",
				typeLabel: "f1tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1tex3Dproj": {
				codeSnippet: "f1tex3Dproj",
				label: "f1tex3Dproj",
				typeLabel: "f1tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1texCUBE": {
				codeSnippet: "f1texCUBE",
				label: "f1texCUBE",
				typeLabel: "f1texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1texCUBEproj": {
				codeSnippet: "f1texCUBEproj",
				label: "f1texCUBEproj",
				typeLabel: "f1texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1texRECT": {
				codeSnippet: "f1texRECT",
				label: "f1texRECT",
				typeLabel: "f1texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1texRECTproj": {
				codeSnippet: "f1texRECTproj",
				label: "f1texRECTproj",
				typeLabel: "f1texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f1texcompare2D": {
				codeSnippet: "f1texcompare2D",
				label: "f1texcompare2D",
				typeLabel: "f1texcompare2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex1D": {
				codeSnippet: "f2tex1D",
				label: "f2tex1D",
				typeLabel: "f2tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex1Dproj": {
				codeSnippet: "f2tex1Dproj",
				label: "f2tex1Dproj",
				typeLabel: "f2tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex2D": {
				codeSnippet: "f2tex2D",
				label: "f2tex2D",
				typeLabel: "f2tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex2Dproj": {
				codeSnippet: "f2tex2Dproj",
				label: "f2tex2Dproj",
				typeLabel: "f2tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex3D": {
				codeSnippet: "f2tex3D",
				label: "f2tex3D",
				typeLabel: "f2tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2tex3Dproj": {
				codeSnippet: "f2tex3Dproj",
				label: "f2tex3Dproj",
				typeLabel: "f2tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2texCUBE": {
				codeSnippet: "f2texCUBE",
				label: "f2texCUBE",
				typeLabel: "f2texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2texCUBEproj": {
				codeSnippet: "f2texCUBEproj",
				label: "f2texCUBEproj",
				typeLabel: "f2texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2texRECT": {
				codeSnippet: "f2texRECT",
				label: "f2texRECT",
				typeLabel: "f2texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f2texRECTproj": {
				codeSnippet: "f2texRECTproj",
				label: "f2texRECTproj",
				typeLabel: "f2texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex1D": {
				codeSnippet: "f3tex1D",
				label: "f3tex1D",
				typeLabel: "f3tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex1Dproj": {
				codeSnippet: "f3tex1Dproj",
				label: "f3tex1Dproj",
				typeLabel: "f3tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex2D": {
				codeSnippet: "f3tex2D",
				label: "f3tex2D",
				typeLabel: "f3tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex2Dproj": {
				codeSnippet: "f3tex2Dproj",
				label: "f3tex2Dproj",
				typeLabel: "f3tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex3D": {
				codeSnippet: "f3tex3D",
				label: "f3tex3D",
				typeLabel: "f3tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3tex3Dproj": {
				codeSnippet: "f3tex3Dproj",
				label: "f3tex3Dproj",
				typeLabel: "f3tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3texCUBE": {
				codeSnippet: "f3texCUBE",
				label: "f3texCUBE",
				typeLabel: "f3texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3texCUBEproj": {
				codeSnippet: "f3texCUBEproj",
				label: "f3texCUBEproj",
				typeLabel: "f3texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3texRECT": {
				codeSnippet: "f3texRECT",
				label: "f3texRECT",
				typeLabel: "f3texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f3texRECTproj": {
				codeSnippet: "f3texRECTproj",
				label: "f3texRECTproj",
				typeLabel: "f3texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex1D": {
				codeSnippet: "f4tex1D",
				label: "f4tex1D",
				typeLabel: "f4tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex1Dproj": {
				codeSnippet: "f4tex1Dproj",
				label: "f4tex1Dproj",
				typeLabel: "f4tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex2D": {
				codeSnippet: "f4tex2D",
				label: "f4tex2D",
				typeLabel: "f4tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex2Dproj": {
				codeSnippet: "f4tex2Dproj",
				label: "f4tex2Dproj",
				typeLabel: "f4tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex3D": {
				codeSnippet: "f4tex3D",
				label: "f4tex3D",
				typeLabel: "f4tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4tex3Dproj": {
				codeSnippet: "f4tex3Dproj",
				label: "f4tex3Dproj",
				typeLabel: "f4tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4texCUBE": {
				codeSnippet: "f4texCUBE",
				label: "f4texCUBE",
				typeLabel: "f4texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4texCUBEproj": {
				codeSnippet: "f4texCUBEproj",
				label: "f4texCUBEproj",
				typeLabel: "f4texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4texRECT": {
				codeSnippet: "f4texRECT",
				label: "f4texRECT",
				typeLabel: "f4texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"f4texRECTproj": {
				codeSnippet: "f4texRECTproj",
				label: "f4texRECTproj",
				typeLabel: "f4texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"false": {
				codeSnippet: "false",
				label: "false",
				typeLabel: "false",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fixed": {
				codeSnippet: "fixed",
				label: "fixed",
				typeLabel: "fixed",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fixed1": {
				codeSnippet: "fixed1",
				label: "fixed1",
				typeLabel: "fixed1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fixed2": {
				codeSnippet: "fixed2",
				label: "fixed2",
				typeLabel: "fixed2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fixed3": {
				codeSnippet: "fixed3",
				label: "fixed3",
				typeLabel: "fixed3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fixed4": {
				codeSnippet: "fixed4",
				label: "fixed4",
				typeLabel: "fixed4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float": {
				codeSnippet: "float",
				label: "float",
				typeLabel: "float",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float1": {
				codeSnippet: "float1",
				label: "float1",
				typeLabel: "float1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float1x1": {
				codeSnippet: "float1x1",
				label: "float1x1",
				typeLabel: "float1x1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float1x2": {
				codeSnippet: "float1x2",
				label: "float1x2",
				typeLabel: "float1x2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float1x3": {
				codeSnippet: "float1x3",
				label: "float1x3",
				typeLabel: "float1x3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float1x4": {
				codeSnippet: "float1x4",
				label: "float1x4",
				typeLabel: "float1x4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float2": {
				codeSnippet: "float2",
				label: "float2",
				typeLabel: "float2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float2x1": {
				codeSnippet: "float2x1",
				label: "float2x1",
				typeLabel: "float2x1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float2x2": {
				codeSnippet: "float2x2",
				label: "float2x2",
				typeLabel: "float2x2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float2x3": {
				codeSnippet: "float2x3",
				label: "float2x3",
				typeLabel: "float2x3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float2x4": {
				codeSnippet: "float2x4",
				label: "float2x4",
				typeLabel: "float2x4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float3": {
				codeSnippet: "float3",
				label: "float3",
				typeLabel: "float3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float3x1": {
				codeSnippet: "float3x1",
				label: "float3x1",
				typeLabel: "float3x1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float3x2": {
				codeSnippet: "float3x2",
				label: "float3x2",
				typeLabel: "float3x2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float3x3": {
				codeSnippet: "float3x3",
				label: "float3x3",
				typeLabel: "float3x3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float3x4": {
				codeSnippet: "float3x4",
				label: "float3x4",
				typeLabel: "float3x4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float4": {
				codeSnippet: "float4",
				label: "float4",
				typeLabel: "float4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float4x1": {
				codeSnippet: "float4x1",
				label: "float4x1",
				typeLabel: "float4x1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float4x2": {
				codeSnippet: "float4x2",
				label: "float4x2",
				typeLabel: "float4x2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float4x3": {
				codeSnippet: "float4x3",
				label: "float4x3",
				typeLabel: "float4x3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"float4x4": {
				codeSnippet: "float4x4",
				label: "float4x4",
				typeLabel: "float4x4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"floor": {
				codeSnippet: "floor",
				label: "floor",
				typeLabel: "floor( x )",
				documentationLabel: "Largest integer not greater than x .",
				highlights: [],
				type: "method"
			},
			"fmod": {
				codeSnippet: "fmod",
				label: "fmod",
				typeLabel: "fmod( x , y )",
				documentationLabel: "Remainder of x / y , with the same sign as x .\n\nIf y is 0, the result is implementation-defined.",
				highlights: [],
				type: "method"
			},
			"for": {
				codeSnippet: "for",
				label: "for",
				typeLabel: "for",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fp20": {
				codeSnippet: "fp20",
				label: "fp20",
				typeLabel: "fp20",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fp30": {
				codeSnippet: "fp30",
				label: "fp30",
				typeLabel: "fp30",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"fp40": {
				codeSnippet: "fp40",
				label: "fp40",
				typeLabel: "fp40",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"frac": {
				codeSnippet: "frac",
				label: "frac",
				typeLabel: "frac( x )",
				documentationLabel: "Fractional part of x .",
				highlights: [],
				type: "method"
			},
			"fresnel": {
				codeSnippet: "fresnel",
				label: "fresnel",
				typeLabel: "fresnel",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"frexp": {
				codeSnippet: "frexp",
				label: "frexp",
				typeLabel: "frexp( x , out exp )",
				documentationLabel: "Splits x into a normalized fraction in the interval [½, 1), which is returned, and a power of 2, which is stored in exp .\n\nIf x is 0, both parts of the result are 0.",
				highlights: [],
				type: "method"
			},
			"glslf": {
				codeSnippet: "glslf",
				label: "glslf",
				typeLabel: "glslf",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"glslg": {
				codeSnippet: "glslg",
				label: "glslg",
				typeLabel: "glslg",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"glslv": {
				codeSnippet: "glslv",
				label: "glslv",
				typeLabel: "glslv",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"gp4": {
				codeSnippet: "gp4",
				label: "gp4",
				typeLabel: "gp4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"gp4fp": {
				codeSnippet: "gp4fp",
				label: "gp4fp",
				typeLabel: "gp4fp",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"gp4gp": {
				codeSnippet: "gp4gp",
				label: "gp4gp",
				typeLabel: "gp4gp",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"gp4vp": {
				codeSnippet: "gp4vp",
				label: "gp4vp",
				typeLabel: "gp4vp",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"gs_4_0": {
				codeSnippet: "gs_4_0",
				label: "gs_4_0",
				typeLabel: "gs_4_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex1D": {
				codeSnippet: "h1tex1D",
				label: "h1tex1D",
				typeLabel: "h1tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex1Dproj": {
				codeSnippet: "h1tex1Dproj",
				label: "h1tex1Dproj",
				typeLabel: "h1tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex2D": {
				codeSnippet: "h1tex2D",
				label: "h1tex2D",
				typeLabel: "h1tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex2Dproj": {
				codeSnippet: "h1tex2Dproj",
				label: "h1tex2Dproj",
				typeLabel: "h1tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex3D": {
				codeSnippet: "h1tex3D",
				label: "h1tex3D",
				typeLabel: "h1tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1tex3Dproj": {
				codeSnippet: "h1tex3Dproj",
				label: "h1tex3Dproj",
				typeLabel: "h1tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1texCUBE": {
				codeSnippet: "h1texCUBE",
				label: "h1texCUBE",
				typeLabel: "h1texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1texCUBEproj": {
				codeSnippet: "h1texCUBEproj",
				label: "h1texCUBEproj",
				typeLabel: "h1texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1texRECT": {
				codeSnippet: "h1texRECT",
				label: "h1texRECT",
				typeLabel: "h1texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1texRECTproj": {
				codeSnippet: "h1texRECTproj",
				label: "h1texRECTproj",
				typeLabel: "h1texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h1texcompare2D": {
				codeSnippet: "h1texcompare2D",
				label: "h1texcompare2D",
				typeLabel: "h1texcompare2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex1D": {
				codeSnippet: "h2tex1D",
				label: "h2tex1D",
				typeLabel: "h2tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex1Dproj": {
				codeSnippet: "h2tex1Dproj",
				label: "h2tex1Dproj",
				typeLabel: "h2tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex2D": {
				codeSnippet: "h2tex2D",
				label: "h2tex2D",
				typeLabel: "h2tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex2Dproj": {
				codeSnippet: "h2tex2Dproj",
				label: "h2tex2Dproj",
				typeLabel: "h2tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex3D": {
				codeSnippet: "h2tex3D",
				label: "h2tex3D",
				typeLabel: "h2tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2tex3Dproj": {
				codeSnippet: "h2tex3Dproj",
				label: "h2tex3Dproj",
				typeLabel: "h2tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2texCUBE": {
				codeSnippet: "h2texCUBE",
				label: "h2texCUBE",
				typeLabel: "h2texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2texCUBEproj": {
				codeSnippet: "h2texCUBEproj",
				label: "h2texCUBEproj",
				typeLabel: "h2texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2texRECT": {
				codeSnippet: "h2texRECT",
				label: "h2texRECT",
				typeLabel: "h2texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h2texRECTproj": {
				codeSnippet: "h2texRECTproj",
				label: "h2texRECTproj",
				typeLabel: "h2texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex1D": {
				codeSnippet: "h3tex1D",
				label: "h3tex1D",
				typeLabel: "h3tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex1Dproj": {
				codeSnippet: "h3tex1Dproj",
				label: "h3tex1Dproj",
				typeLabel: "h3tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex2D": {
				codeSnippet: "h3tex2D",
				label: "h3tex2D",
				typeLabel: "h3tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex2Dproj": {
				codeSnippet: "h3tex2Dproj",
				label: "h3tex2Dproj",
				typeLabel: "h3tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex3D": {
				codeSnippet: "h3tex3D",
				label: "h3tex3D",
				typeLabel: "h3tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3tex3Dproj": {
				codeSnippet: "h3tex3Dproj",
				label: "h3tex3Dproj",
				typeLabel: "h3tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3texCUBE": {
				codeSnippet: "h3texCUBE",
				label: "h3texCUBE",
				typeLabel: "h3texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3texCUBEproj": {
				codeSnippet: "h3texCUBEproj",
				label: "h3texCUBEproj",
				typeLabel: "h3texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3texRECT": {
				codeSnippet: "h3texRECT",
				label: "h3texRECT",
				typeLabel: "h3texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h3texRECTproj": {
				codeSnippet: "h3texRECTproj",
				label: "h3texRECTproj",
				typeLabel: "h3texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex1D": {
				codeSnippet: "h4tex1D",
				label: "h4tex1D",
				typeLabel: "h4tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex1Dproj": {
				codeSnippet: "h4tex1Dproj",
				label: "h4tex1Dproj",
				typeLabel: "h4tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex2D": {
				codeSnippet: "h4tex2D",
				label: "h4tex2D",
				typeLabel: "h4tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex2Dproj": {
				codeSnippet: "h4tex2Dproj",
				label: "h4tex2Dproj",
				typeLabel: "h4tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex3D": {
				codeSnippet: "h4tex3D",
				label: "h4tex3D",
				typeLabel: "h4tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4tex3Dproj": {
				codeSnippet: "h4tex3Dproj",
				label: "h4tex3Dproj",
				typeLabel: "h4tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4texCUBE": {
				codeSnippet: "h4texCUBE",
				label: "h4texCUBE",
				typeLabel: "h4texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4texCUBEproj": {
				codeSnippet: "h4texCUBEproj",
				label: "h4texCUBEproj",
				typeLabel: "h4texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4texRECT": {
				codeSnippet: "h4texRECT",
				label: "h4texRECT",
				typeLabel: "h4texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"h4texRECTproj": {
				codeSnippet: "h4texRECTproj",
				label: "h4texRECTproj",
				typeLabel: "h4texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"half": {
				codeSnippet: "half",
				label: "half",
				typeLabel: "half",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"half1": {
				codeSnippet: "half1",
				label: "half1",
				typeLabel: "half1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"half2": {
				codeSnippet: "half2",
				label: "half2",
				typeLabel: "half2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"half3": {
				codeSnippet: "half3",
				label: "half3",
				typeLabel: "half3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"half4": {
				codeSnippet: "half4",
				label: "half4",
				typeLabel: "half4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"hlslf": {
				codeSnippet: "hlslf",
				label: "hlslf",
				typeLabel: "hlslf",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"hlslv": {
				codeSnippet: "hlslv",
				label: "hlslv",
				typeLabel: "hlslv",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"if": {
				codeSnippet: "if",
				label: "if",
				typeLabel: "if",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"in": {
				codeSnippet: "in",
				label: "in",
				typeLabel: "in",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"inout": {
				codeSnippet: "inout",
				label: "inout",
				typeLabel: "inout",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"int": {
				codeSnippet: "int",
				label: "int",
				typeLabel: "int",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"int1": {
				codeSnippet: "int1",
				label: "int1",
				typeLabel: "int1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"int2": {
				codeSnippet: "int2",
				label: "int2",
				typeLabel: "int2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"int3": {
				codeSnippet: "int3",
				label: "int3",
				typeLabel: "int3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"int4": {
				codeSnippet: "int4",
				label: "int4",
				typeLabel: "int4",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"interface": {
				codeSnippet: "interface",
				label: "interface",
				typeLabel: "interface",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"isfinite": {
				codeSnippet: "isfinite",
				label: "isfinite",
				typeLabel: "isfinite( x )",
				documentationLabel: "Returns true if x is finite.",
				highlights: [],
				type: "method"
			},
			"isinf": {
				codeSnippet: "isinf",
				label: "isinf",
				typeLabel: "isinf( x )",
				documentationLabel: "Returns true if x is infinite.",
				highlights: [],
				type: "method"
			},
			"isnan": {
				codeSnippet: "isnan",
				label: "isnan",
				typeLabel: "isnan( x )",
				documentationLabel: "Returns true if x is NaN (Not a Number).",
				highlights: [],
				type: "method"
			},
			"ldexp": {
				codeSnippet: "ldexp",
				label: "ldexp",
				typeLabel: "ldexp( x , n )",
				documentationLabel: "x x 2 n .",
				highlights: [],
				type: "method"
			},
			"length": {
				codeSnippet: "length",
				label: "length",
				typeLabel: "length( v )",
				documentationLabel: "Euclidean length of a vector.",
				highlights: [],
				type: "method"
			},
			"lerp": {
				codeSnippet: "lerp",
				label: "lerp",
				typeLabel: "lerp( a , b , f )",
				documentationLabel: "Linear interpolation:\n\n(1 – f )* a + b * f\n\nwhere a and b are matching vector or scalar types. f can be either a scalar or a vector of the same type as a and b .",
				highlights: [],
				type: "method"
			},
			"log": {
				codeSnippet: "log",
				label: "log",
				typeLabel: "log( x )",
				documentationLabel: "Natural logarithm ln( x ) ; x must be greater than 0.",
				highlights: [],
				type: "method"
			},
			"log2": {
				codeSnippet: "log2",
				label: "log2",
				typeLabel: "log2( x )",
				documentationLabel: "Base 2 logarithm of x ; x must be greater than 0.",
				highlights: [],
				type: "method"
			},
			"log10": {
				codeSnippet: "log10",
				label: "log10",
				typeLabel: "log10( x )",
				documentationLabel: "Base 10 logarithm of x ; x must be greater than 0.",
				highlights: [],
				type: "method"
			},
			"max": {
				codeSnippet: "max",
				label: "max",
				typeLabel: "max( a , b )",
				documentationLabel: "Maximum of a and b .",
				highlights: [],
				type: "method"
			},
			"min": {
				codeSnippet: "min",
				label: "min",
				typeLabel: "min( a , b )",
				documentationLabel: "Minimum of a and b .",
				highlights: [],
				type: "method"
			},
			"mix": {
				codeSnippet: "mix",
				label: "mix",
				typeLabel: "mix",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"modf": {
				codeSnippet: "modf",
				label: "modf",
				typeLabel: "modf( x , out ip )",
				documentationLabel: "Splits x into integral and fractional parts, each with the same sign as x .\n\nStores the integral part in ip and returns the fractional part.",
				highlights: [],
				type: "method"
			},
			"mul": {
				codeSnippet: "mul",
				label: "mul",
				typeLabel: "mul( M , N )",
				documentationLabel: "Matrix product of matrix M and matrix N.\n\nIf M has size A x B , and N has size B x C , returns a matrix of size A x C .",
				highlights: [],
				type: "method"
			},
			"noise": {
				codeSnippet: "noise",
				label: "noise",
				typeLabel: "noise( x )",
				documentationLabel: "Either a one-, two-, or three-dimensional noise function, depending on the type of its argument. The returned value is between 0 and 1, and is always the same for a given input value.",
				highlights: [],
				type: "method"
			},
			"none": {
				codeSnippet: "none",
				label: "none",
				typeLabel: "none",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"normalize": {
				codeSnippet: "normalize",
				label: "normalize",
				typeLabel: "normalize( v )",
				documentationLabel: "Returns a vector of length 1 that points in the same direction as vector v .",
				highlights: [],
				type: "method"
			},
			"out": {
				codeSnippet: "out",
				label: "out",
				typeLabel: "out",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"pack_2half": {
				codeSnippet: "pack_2half",
				label: "pack_2half",
				typeLabel: "pack_2half",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"pack_4clamp1s": {
				codeSnippet: "pack_4clamp1s",
				label: "pack_4clamp1s",
				typeLabel: "pack_4clamp1s",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"pass": {
				codeSnippet: "pass",
				label: "pass",
				typeLabel: "pass",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"pow": {
				codeSnippet: "pow",
				label: "pow",
				typeLabel: "pow( x , y )",
				documentationLabel: "x to the power of y .",
				highlights: [],
				type: "method"
			},
			"ps_1_1": {
				codeSnippet: "ps_1_1",
				label: "ps_1_1",
				typeLabel: "ps_1_1",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_1_2": {
				codeSnippet: "ps_1_2",
				label: "ps_1_2",
				typeLabel: "ps_1_2",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_1_3": {
				codeSnippet: "ps_1_3",
				label: "ps_1_3",
				typeLabel: "ps_1_3",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_2_0": {
				codeSnippet: "ps_2_0",
				label: "ps_2_0",
				typeLabel: "ps_2_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_2_a": {
				codeSnippet: "ps_2_a",
				label: "ps_2_a",
				typeLabel: "ps_2_a",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_2_x": {
				codeSnippet: "ps_2_x",
				label: "ps_2_x",
				typeLabel: "ps_2_x",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_3_0": {
				codeSnippet: "ps_3_0",
				label: "ps_3_0",
				typeLabel: "ps_3_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"ps_4_0": {
				codeSnippet: "ps_4_0",
				label: "ps_4_0",
				typeLabel: "ps_4_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"radians": {
				codeSnippet: "radians",
				label: "radians",
				typeLabel: "radians( x )",
				documentationLabel: "Degree-to-radian conversion.",
				highlights: [],
				type: "method"
			},
			"reflect": {
				codeSnippet: "reflect",
				label: "reflect",
				typeLabel: "reflect( I , N )",
				documentationLabel: "Computes reflection vector from entering ray direction I and surface normal N .\n\nValid only for three-component vectors.",
				highlights: [],
				type: "method"
			},
			"reflectn": {
				codeSnippet: "reflectn",
				label: "reflectn",
				typeLabel: "reflectn",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"refract": {
				codeSnippet: "refract",
				label: "refract",
				typeLabel: "refract( I , N , eta )",
				documentationLabel: "Given entering ray direction I , surface normal N , and relative index of refraction eta , computes refraction vector.\n\nIf the angle between I and N is too large for a given eta , returns (0, 0, 0).\n\nValid only for three-component vectors.",
				highlights: [],
				type: "method"
			},
			"refractn": {
				codeSnippet: "refractn",
				label: "refractn",
				typeLabel: "refractn",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"register": {
				codeSnippet: "register",
				label: "register",
				typeLabel: "register",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"return": {
				codeSnippet: "return",
				label: "return",
				typeLabel: "return",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"round": {
				codeSnippet: "round",
				label: "round",
				typeLabel: "round( x )",
				documentationLabel: "Closest integer to x .",
				highlights: [],
				type: "method"
			},
			"rsqrt": {
				codeSnippet: "rsqrt",
				label: "rsqrt",
				typeLabel: "rsqrt( x )",
				documentationLabel: "Reciprocal square root of x ; x must be greater than 0.",
				highlights: [],
				type: "method"
			},
			"sampler1D": {
				codeSnippet: "sampler1D",
				label: "sampler1D",
				typeLabel: "sampler1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sampler1DARRAY": {
				codeSnippet: "sampler1DARRAY",
				label: "sampler1DARRAY",
				typeLabel: "sampler1DARRAY",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sampler2D": {
				codeSnippet: "sampler2D",
				label: "sampler2D",
				typeLabel: "sampler2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sampler2DARRAY": {
				codeSnippet: "sampler2DARRAY",
				label: "sampler2DARRAY",
				typeLabel: "sampler2DARRAY",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sampler3D": {
				codeSnippet: "sampler3D",
				label: "sampler3D",
				typeLabel: "sampler3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"samplerCUBE": {
				codeSnippet: "samplerCUBE",
				label: "samplerCUBE",
				typeLabel: "samplerCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"samplerRECT": {
				codeSnippet: "samplerRECT",
				label: "samplerRECT",
				typeLabel: "samplerRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sampler_state": {
				codeSnippet: "sampler_state",
				label: "sampler_state",
				typeLabel: "sampler_state",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"sign": {
				codeSnippet: "sign",
				label: "sign",
				typeLabel: "sign( x )",
				documentationLabel: "1 if x > 0; –1 if x < 0; 0 otherwise.",
				highlights: [],
				type: "method"
			},
			"sin": {
				codeSnippet: "sin",
				label: "sin",
				typeLabel: "sin( x )",
				documentationLabel: "Sine of x .",
				highlights: [],
				type: "method"
			},
			"sincos": {
				codeSnippet: "sincos",
				label: "sincos",
				typeLabel: "sincos(float x , out s , out c )",
				documentationLabel: "s is set to the sine of x , and c is set to the cosine of x .\n\nIf both sin( x ) and cos( x ) are needed, this function is more efficient than calculating each individually.",
				highlights: [],
				type: "method"
			},
			"sinh": {
				codeSnippet: "sinh",
				label: "sinh",
				typeLabel: "sinh( x )",
				documentationLabel: "Hyperbolic sine of x .",
				highlights: [],
				type: "method"
			},
			"smoothstep": {
				codeSnippet: "smoothstep",
				label: "smoothstep",
				typeLabel: "smoothstep( min , max , x )",
				documentationLabel: "For values of x between min and max , returns a smoothly varying value that ranges from 0 at x = min to 1 at x = max .\n\nx is clamped to the range [ min , max ] and then the interpolation formula is evaluated:\n\n–2*(( x – min )/( max – min ))3 +\n\n3*(( x – min )/( max – min ))2",
				highlights: [],
				type: "method"
			},
			"sqrt": {
				codeSnippet: "sqrt",
				label: "sqrt",
				typeLabel: "sqrt( x )",
				documentationLabel: "Square root of x ;\n\nx must be greater than 0.",
				highlights: [],
				type: "method"
			},
			"static": {
				codeSnippet: "static",
				label: "static",
				typeLabel: "static",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"step": {
				codeSnippet: "step",
				label: "step",
				typeLabel: "step( a , x )",
				documentationLabel: "0 if x < a ;\n\n1 if x >= a .",
				highlights: [],
				type: "method"
			},
			"string": {
				codeSnippet: "string",
				label: "string",
				typeLabel: "string",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"struct": {
				codeSnippet: "struct",
				label: "struct",
				typeLabel: "struct",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tan": {
				codeSnippet: "tan",
				label: "tan",
				typeLabel: "tan( x )",
				documentationLabel: "Tangent of x .",
				highlights: [],
				type: "method"
			},
			"tanh": {
				codeSnippet: "tanh",
				label: "tanh",
				typeLabel: "tanh( x )",
				documentationLabel: "Hyperbolic tangent of x .",
				highlights: [],
				type: "method"
			},
			"technique": {
				codeSnippet: "technique",
				label: "technique",
				typeLabel: "technique",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex1CUBE": {
				codeSnippet: "tex1CUBE",
				label: "tex1CUBE",
				typeLabel: "tex1CUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex1D": {
				codeSnippet: "tex1D",
				label: "tex1D",
				typeLabel: "tex1D(sampler1D tex , float s )",
				documentationLabel: "1D nonprojective texture query",
				highlights: [],
				type: "method"
			},
			"tex1Dbias": {
				codeSnippet: "tex1Dbias",
				label: "tex1Dbias",
				typeLabel: "tex1Dbias",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex1Dlod": {
				codeSnippet: "tex1Dlod",
				label: "tex1Dlod",
				typeLabel: "tex1Dlod",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex1Dproj": {
				codeSnippet: "tex1Dproj",
				label: "tex1Dproj",
				typeLabel: "tex1Dproj(sampler1D tex , float2 sq )",
				documentationLabel: "1D projective texture query",
				highlights: [],
				type: "method"
			},
			"tex2D": {
				codeSnippet: "tex2D",
				label: "tex2D",
				typeLabel: "tex2D(sampler2D tex , float2 s )",
				documentationLabel: "2D nonprojective texture query",
				highlights: [],
				type: "method"
			},
			"tex2Dbias": {
				codeSnippet: "tex2Dbias",
				label: "tex2Dbias",
				typeLabel: "tex2Dbias",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex2Dlod": {
				codeSnippet: "tex2Dlod",
				label: "tex2Dlod",
				typeLabel: "tex2Dlod",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex2Dproj": {
				codeSnippet: "tex2Dproj",
				label: "tex2Dproj",
				typeLabel: "tex2Dproj(sampler2D tex , float3 sq )",
				documentationLabel: "2D projective texture query",
				highlights: [],
				type: "method"
			},
			"tex3D": {
				codeSnippet: "tex3D",
				label: "tex3D",
				typeLabel: "tex3D(sampler3D tex , float3 s )",
				documentationLabel: "3D nonprojective texture query",
				highlights: [],
				type: "method"
			},
			"tex3Dbias": {
				codeSnippet: "tex3Dbias",
				label: "tex3Dbias",
				typeLabel: "tex3Dbias",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex3Dlod": {
				codeSnippet: "tex3Dlod",
				label: "tex3Dlod",
				typeLabel: "tex3Dlod",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"tex3Dproj": {
				codeSnippet: "tex3Dproj",
				label: "tex3Dproj",
				typeLabel: "tex3Dproj(sampler3D tex , float4 sq )",
				documentationLabel: "3D projective texture query",
				highlights: [],
				type: "method"
			},
			"texCUBEbias": {
				codeSnippet: "texCUBEbias",
				label: "texCUBEbias",
				typeLabel: "texCUBEbias",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texCUBElod": {
				codeSnippet: "texCUBElod",
				label: "texCUBElod",
				typeLabel: "texCUBElod",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texCUBEproj": {
				codeSnippet: "texCUBEproj",
				label: "texCUBEproj",
				typeLabel: "texCUBEproj(samplerCUBE tex , float4 sq )",
				documentationLabel: "Cube map projective texture query (ignores q)",
				highlights: [],
				type: "method"
			},
			"texRECT": {
				codeSnippet: "texRECT",
				label: "texRECT",
				typeLabel: "texRECT(samplerRECT tex , float2 s )",
				documentationLabel: "2D nonprojective texture rectangle texture query (OpenGL only)",
				highlights: [],
				type: "method"
			},
			"texRECTbias": {
				codeSnippet: "texRECTbias",
				label: "texRECTbias",
				typeLabel: "texRECTbias",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texRECTlod": {
				codeSnippet: "texRECTlod",
				label: "texRECTlod",
				typeLabel: "texRECTlod",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texRECTproj": {
				codeSnippet: "texRECTproj",
				label: "texRECTproj",
				typeLabel: "texRECTproj(samplerRECT tex , float3 sq )",
				documentationLabel: "2D texture rectangle projective texture query (OpenGL only)",
				highlights: [],
				type: "method"
			},
			"texcompare2D": {
				codeSnippet: "texcompare2D",
				label: "texcompare2D",
				typeLabel: "texcompare2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texture": {
				codeSnippet: "texture",
				label: "texture",
				typeLabel: "texture",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"texture2D": {
				codeSnippet: "texture2D",
				label: "texture2D",
				typeLabel: "texture2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"true": {
				codeSnippet: "true",
				label: "true",
				typeLabel: "true",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"trunc": {
				codeSnippet: "trunc",
				label: "trunc",
				typeLabel: "trunc",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"typedef": {
				codeSnippet: "typedef",
				label: "typedef",
				typeLabel: "typedef",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"uniform": {
				codeSnippet: "uniform",
				label: "uniform",
				typeLabel: "uniform",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"unpack_2half": {
				codeSnippet: "unpack_2half",
				label: "unpack_2half",
				typeLabel: "unpack_2half",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"unpack_4clamp1s": {
				codeSnippet: "unpack_4clamp1s",
				label: "unpack_4clamp1s",
				typeLabel: "unpack_4clamp1s",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"varying": {
				codeSnippet: "varying",
				label: "varying",
				typeLabel: "varying",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vertex2fragment": {
				codeSnippet: "vertex2fragment",
				label: "vertex2fragment",
				typeLabel: "vertex2fragment",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"void": {
				codeSnippet: "void",
				label: "void",
				typeLabel: "void",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vp20": {
				codeSnippet: "vp20",
				label: "vp20",
				typeLabel: "vp20",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vp30": {
				codeSnippet: "vp30",
				label: "vp30",
				typeLabel: "vp30",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vp40": {
				codeSnippet: "vp40",
				label: "vp40",
				typeLabel: "vp40",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vs_2_0": {
				codeSnippet: "vs_2_0",
				label: "vs_2_0",
				typeLabel: "vs_2_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"vs_4_0": {
				codeSnippet: "vs_4_0",
				label: "vs_4_0",
				typeLabel: "vs_4_0",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"while": {
				codeSnippet: "while",
				label: "while",
				typeLabel: "while",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex1D": {
				codeSnippet: "x1tex1D",
				label: "x1tex1D",
				typeLabel: "x1tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex1Dproj": {
				codeSnippet: "x1tex1Dproj",
				label: "x1tex1Dproj",
				typeLabel: "x1tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex2D": {
				codeSnippet: "x1tex2D",
				label: "x1tex2D",
				typeLabel: "x1tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex2Dproj": {
				codeSnippet: "x1tex2Dproj",
				label: "x1tex2Dproj",
				typeLabel: "x1tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex3D": {
				codeSnippet: "x1tex3D",
				label: "x1tex3D",
				typeLabel: "x1tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1tex3Dproj": {
				codeSnippet: "x1tex3Dproj",
				label: "x1tex3Dproj",
				typeLabel: "x1tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1texCUBE": {
				codeSnippet: "x1texCUBE",
				label: "x1texCUBE",
				typeLabel: "x1texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1texCUBEproj": {
				codeSnippet: "x1texCUBEproj",
				label: "x1texCUBEproj",
				typeLabel: "x1texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1texRECT": {
				codeSnippet: "x1texRECT",
				label: "x1texRECT",
				typeLabel: "x1texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1texRECTproj": {
				codeSnippet: "x1texRECTproj",
				label: "x1texRECTproj",
				typeLabel: "x1texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x1texcompare2D": {
				codeSnippet: "x1texcompare2D",
				label: "x1texcompare2D",
				typeLabel: "x1texcompare2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex1D": {
				codeSnippet: "x2tex1D",
				label: "x2tex1D",
				typeLabel: "x2tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex1Dproj": {
				codeSnippet: "x2tex1Dproj",
				label: "x2tex1Dproj",
				typeLabel: "x2tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex2D": {
				codeSnippet: "x2tex2D",
				label: "x2tex2D",
				typeLabel: "x2tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex2Dproj": {
				codeSnippet: "x2tex2Dproj",
				label: "x2tex2Dproj",
				typeLabel: "x2tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex3D": {
				codeSnippet: "x2tex3D",
				label: "x2tex3D",
				typeLabel: "x2tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2tex3Dproj": {
				codeSnippet: "x2tex3Dproj",
				label: "x2tex3Dproj",
				typeLabel: "x2tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2texCUBE": {
				codeSnippet: "x2texCUBE",
				label: "x2texCUBE",
				typeLabel: "x2texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2texCUBEproj": {
				codeSnippet: "x2texCUBEproj",
				label: "x2texCUBEproj",
				typeLabel: "x2texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2texRECT": {
				codeSnippet: "x2texRECT",
				label: "x2texRECT",
				typeLabel: "x2texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x2texRECTproj": {
				codeSnippet: "x2texRECTproj",
				label: "x2texRECTproj",
				typeLabel: "x2texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex1D": {
				codeSnippet: "x3tex1D",
				label: "x3tex1D",
				typeLabel: "x3tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex1Dproj": {
				codeSnippet: "x3tex1Dproj",
				label: "x3tex1Dproj",
				typeLabel: "x3tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex2D": {
				codeSnippet: "x3tex2D",
				label: "x3tex2D",
				typeLabel: "x3tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex2Dproj": {
				codeSnippet: "x3tex2Dproj",
				label: "x3tex2Dproj",
				typeLabel: "x3tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex3D": {
				codeSnippet: "x3tex3D",
				label: "x3tex3D",
				typeLabel: "x3tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3tex3Dproj": {
				codeSnippet: "x3tex3Dproj",
				label: "x3tex3Dproj",
				typeLabel: "x3tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3texCUBE": {
				codeSnippet: "x3texCUBE",
				label: "x3texCUBE",
				typeLabel: "x3texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3texCUBEproj": {
				codeSnippet: "x3texCUBEproj",
				label: "x3texCUBEproj",
				typeLabel: "x3texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3texRECT": {
				codeSnippet: "x3texRECT",
				label: "x3texRECT",
				typeLabel: "x3texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x3texRECTproj": {
				codeSnippet: "x3texRECTproj",
				label: "x3texRECTproj",
				typeLabel: "x3texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex1D": {
				codeSnippet: "x4tex1D",
				label: "x4tex1D",
				typeLabel: "x4tex1D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex1Dproj": {
				codeSnippet: "x4tex1Dproj",
				label: "x4tex1Dproj",
				typeLabel: "x4tex1Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex2D": {
				codeSnippet: "x4tex2D",
				label: "x4tex2D",
				typeLabel: "x4tex2D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex2Dproj": {
				codeSnippet: "x4tex2Dproj",
				label: "x4tex2Dproj",
				typeLabel: "x4tex2Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex3D": {
				codeSnippet: "x4tex3D",
				label: "x4tex3D",
				typeLabel: "x4tex3D",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4tex3Dproj": {
				codeSnippet: "x4tex3Dproj",
				label: "x4tex3Dproj",
				typeLabel: "x4tex3Dproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4texCUBE": {
				codeSnippet: "x4texCUBE",
				label: "x4texCUBE",
				typeLabel: "x4texCUBE",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4texCUBEproj": {
				codeSnippet: "x4texCUBEproj",
				label: "x4texCUBEproj",
				typeLabel: "x4texCUBEproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4texRECT": {
				codeSnippet: "x4texRECT",
				label: "x4texRECT",
				typeLabel: "x4texRECT",
				documentationLabel: "",
				highlights: [],
				type: "method"
			},
			"x4texRECTproj": {
				codeSnippet: "x4texRECTproj",
				label: "x4texRECTproj",
				typeLabel: "x4texRECTproj",
				documentationLabel: "",
				highlights: [],
				type: "method"
			}
		};
		return Shader80Completion;
	})();
	return Shader80Completion;
});
//# sourceMappingURL=shader80Completion.js.map