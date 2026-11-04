"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const registerCivilizations_1 = require("./registerCivilizations");
const registerEarthStartTiles_1 = require("./registerEarthStartTiles");
const registerLeaders_1 = require("./registerLeaders");
const registerNationalThemes_1 = require("./registerNationalThemes");
const registerTraits_1 = require("./registerTraits");
(0, registerCivilizations_1.default)();
(0, registerLeaders_1.default)();
(0, registerNationalThemes_1.default)();
(0, registerTraits_1.default)();
(0, registerEarthStartTiles_1.default)();
//# sourceMappingURL=index.js.map