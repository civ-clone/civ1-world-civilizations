"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
// Each civilization's attributes and city names.
require("@civ-clone/base-civilization-sioux");
require("@civ-clone/base-civilization-inca");
require("@civ-clone/base-civilization-brazilian");
require("@civ-clone/base-civilization-malian");
require("@civ-clone/base-civilization-kongo");
require("@civ-clone/base-civilization-ethiopian");
require("@civ-clone/base-civilization-viking");
require("@civ-clone/base-civilization-khmer");
require("@civ-clone/base-civilization-indonesian");
require("@civ-clone/base-civilization-japanese");
require("@civ-clone/base-civilization-australian");
require("@civ-clone/base-civilization-chukchi");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
const CivilizationRegistry_1 = require("@civ-clone/core-civilization/CivilizationRegistry");
const LeaderRegistry_1 = require("@civ-clone/core-civilization/LeaderRegistry");
const EarthStartTileRegistry_1 = require("@civ-clone/civ1-earth-generator/EarthStartTileRegistry");
const TraitRegistry_1 = require("@civ-clone/core-civilization/TraitRegistry");
const registerCivilizations_1 = require("./registerCivilizations");
const registerEarthStartTiles_1 = require("./registerEarthStartTiles");
const registerLeaders_1 = require("./registerLeaders");
const registerNationalThemes_1 = require("./registerNationalThemes");
const registerTraits_1 = require("./registerTraits");
/**
 * The world's civilizations, leaders, traits, national themes and Earth start squares into a game's own registries, so
 *  a game built with its own gets them (civ-clone/web-renderer#370).
 *
 * The base-civilization-* packages imported above still register their attributes and city names at import.
 */
const register = (game) => {
    (0, registerCivilizations_1.default)(game.civilizations);
    (0, registerLeaders_1.default)(game.leaders);
    (0, registerNationalThemes_1.default)(game.attributes);
    (0, registerTraits_1.default)(game.traits);
    (0, registerEarthStartTiles_1.default)(game.earthStartTiles);
};
exports.register = register;
// The plugin loader imports this for its side effects. Until it passes a game of its own, everything goes into the
//  module registries, which are the default game's.
(0, exports.register)({
    attributes: AttributeRegistry_1.instance,
    civilizations: CivilizationRegistry_1.instance,
    earthStartTiles: EarthStartTileRegistry_1.instance,
    leaders: LeaderRegistry_1.instance,
    traits: TraitRegistry_1.instance,
});
exports.default = exports.register;
//# sourceMappingURL=index.js.map