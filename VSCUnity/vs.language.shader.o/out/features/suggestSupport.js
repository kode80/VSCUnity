/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'vs/nls', 'vs/base/collections', './abstractSupport', '../shader80', '../shader80Completion', 'monaco' ], function (require, exports, nls, collections, AbstractSupport, shader80, Shader80Completion, monaco) {
    var SuggestSupport = (function (_super) {
        __extends(SuggestSupport, _super);

        function SuggestSupport() {
            _super.apply(this, arguments);
            this.triggerCharacters = ['.', '<'];
            this.excludeTokens = ['comment.cs', 'string.cs', 'number.cs'];
            this.completion = new Shader80Completion();
        }

        SuggestSupport.prototype.suggest = function (resource, position) 
        {
            if (this.isInMemory(resource)) {
                return monaco.Promise.as([]);
            }
            var word = this._modelService.getModel(resource).getWordAtPosition(position, false), request;
            var wordString = word ? word.word.substring(0, position.column - word.startColumn) : '';

            return this.completion.CompletionsForString( wordString);
        };
        return SuggestSupport;
    })(AbstractSupport);

    return SuggestSupport;
});
//# sourceMappingURL=suggestSupport.js.map
