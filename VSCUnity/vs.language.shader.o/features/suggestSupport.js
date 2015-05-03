/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../../declares.d.ts" />
'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'vs/nls', 'vs/base/collections', './abstractSupport', '../shader80', 'monaco' ], function (require, exports, nls, collections, AbstractSupport, shader80, monaco) {
    var SuggestSupport = (function (_super) {
        __extends(SuggestSupport, _super);
        function SuggestSupport() {
            _super.apply(this, arguments);
            this.triggerCharacters = ['.', '<'];
            this.excludeTokens = ['comment.cs', 'string.cs', 'number.cs'];
        }
        SuggestSupport.prototype.suggest = function (resource, position) {
            if (this.isInMemory(resource)) {
                return monaco.Promise.as([]);
            }
            var word = this._modelService.getModel(resource).getWordAtPosition(position, false), request;
            var wordString = word ? word.word.substring(0, position.column - word.startColumn) : '';

            return [{
                currentWord: wordString,
                suggestions: [ {
                        codeSnippet: "kode80",
                        label: "kode80",
                        typeLabel: "reverse engineering Visual Studio Code's plugin system",
                        documentationLabel: "for VSCUnity shader plugin awesomness!",
                        highlights: [],
                        type: "method"
                    },
                    {
                        codeSnippet: "",
                        label: "VSCUnity",
                        typeLabel: "typeLabel goes here",
                        documentationLabel: "documentationLabel goes here",
                        highlights: [],
                        type: "method"
                    },
                    {
                        codeSnippet: "",
                        label: "FTW",
                        typeLabel: "typeLabel goes here",
                        documentationLabel: "documentationLabel goes here",
                        highlights: [],
                        type: "method"
                    }]
            }];
        };
        return SuggestSupport;
    })(AbstractSupport);

    return SuggestSupport;
});
