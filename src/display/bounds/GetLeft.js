/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the left coordinate from the bounds of the Game Object.
 *
 * @function Phaser.Display.Bounds.GetLeft
 * @since 3.0.0
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The left coordinate of the bounds of the Game Object.
 */
var GetLeft = function (gameObject)
{
    return gameObject.x - (gameObject.width * gameObject.originX);
};

module.exports = GetLeft;
