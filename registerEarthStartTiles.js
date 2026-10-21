"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEarthStartTiles = void 0;
const EarthStartTileRegistry_1 = require("@civ-clone/civ1-earth-generator/EarthStartTileRegistry");
const EarthStartTile_1 = require("@civ-clone/civ1-earth-generator/EarthStartTile");
const EarthStartTiles_1 = require("./EarthStartTiles");
const registerEarthStartTiles = (earthStartTileRegistry = EarthStartTileRegistry_1.instance) => earthStartTileRegistry.register(...EarthStartTiles_1.default.map(([CivilizationType, startTiles]) => new EarthStartTile_1.default(CivilizationType, startTiles)));
exports.registerEarthStartTiles = registerEarthStartTiles;
exports.default = exports.registerEarthStartTiles;
//# sourceMappingURL=registerEarthStartTiles.js.map