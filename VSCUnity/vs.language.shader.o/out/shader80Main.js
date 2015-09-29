/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", 'monaco', './features/suggestSupport', './shader80'], function (require, exports, monaco, SuggestSupport, shader80) {
    function activate(_ctx) {
        // We must copy the `ctx` for now because it becomes invalid as soon as this method call finishes
        var ctx = {
            modelService: _ctx.modelService,
            markerService: _ctx.markerService,
            configurationService: _ctx.configurationService
        };

        monaco.Modes.SuggestSupport.register( 'shader', new SuggestSupport( ctx));
        
        return monaco.Promise.as(undefined);
    }

    exports.activate = activate;
});
//# sourceMappingURL=shader80Main.js.map