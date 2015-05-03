/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports", 'monaco', './features/suggestSupport', './shader80'], function (require, exports, monaco, SuggestSupport, shader80) {
    function PrintObject( obj)
    {
        var str = "";
        for( var key in obj)
        {
            if( typeof obj[key] === 'object')
            {
                str += "\n" + key + ": { " + PrintObject( obj[ key]) + "}, ";
            }
            else
            {
                str += key + ", ";
            }
        }

        return str;
    }

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
