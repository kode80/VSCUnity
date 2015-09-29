/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", 'monaco'], function (require, exports, monaco) {
    var AbstractSupport = (function () {
        function AbstractSupport(ctx) {
            this._modelService = ctx.modelService;
        }
        AbstractSupport.prototype.filename = function (resource) {
            return monaco.Paths.toAbsoluteFilePath(monaco.URL.fromUri(resource));
        };
        //	public resource(filename: string): monaco.URL {
        //		return this._filepaths.asUrl(filename);
        //	}
        AbstractSupport.prototype.buffer = function (resource) {
            return AbstractSupport.buffer(this._modelService.getModel(resource));
        };
        AbstractSupport.prototype.isInMemory = function (resource) {
            return monaco.URL.fromUri(resource).isInMemory();
        };
        AbstractSupport.buffer = function (model) {
            return model.getValue(monaco.Models.EndOfLinePreference.LF, false);
        };
        return AbstractSupport;
    })();
    return AbstractSupport;
});
//# sourceMappingURL=abstractSupport.js.map
