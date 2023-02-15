/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../../../utils/Class');
var CircleFrag = require('../../shaders/FXCircle-frag.js');
var GetFastValue = require('../../../../utils/object/GetFastValue');
var PostFXPipeline = require('../PostFXPipeline');

var CircleFXPipeline = new Class({

    Extends: PostFXPipeline,

    initialize:

    function CircleFXPipeline (game)
    {
        PostFXPipeline.call(this, {
            game: game,
            fragShader: CircleFrag
        });

        this.scale = 1;

        //  0.005 = strength of the ring (0.5 = super soft, 0.05 = gentle, 0.005 = harsh)
        this.feather = 0.005;

        this.thickness = 8;

        this.glcolor = [ 1, 0.2, 0.7 ];
        this.glcolor2 = [ 1, 0, 0, 0.4 ];
    },

    onPreRender: function (config, shader, width, height)
    {
        // eslint-disable-next-line consistent-this
        if (config === undefined) { config = this; }

        this.set1f('scale', GetFastValue(config, 'scale'), shader);
        this.set1f('feather', GetFastValue(config, 'feather'), shader);
        this.set1f('thickness', GetFastValue(config, 'thickness'), shader);
        this.set3fv('color', GetFastValue(config, 'glcolor'), shader);
        this.set4fv('backgroundColor', GetFastValue(config, 'glcolor2'), shader);

        if (width && height)
        {
            this.set2f('resolution', width, height, shader);
        }
    },

    onDraw: function (target)
    {
        this.set2f('resolution', target.width, target.height);

        this.bindAndDraw(target);
    }

});

module.exports = CircleFXPipeline;
