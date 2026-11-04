"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerNationalThemes = exports.borrowedThemes = void 0;
const Civilizations_1 = require("@civ-clone/civ1-civilization/Civilizations");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
const Civilizations_2 = require("./Civilizations");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const registerNationalThemes_1 = require("@civ-clone/civ1-civilization/registerNationalThemes");
/**
 * Civ1's music has a national theme only for its own 14 civilizations, so until these have themes of their own
 *  (civ-clone/web-renderer#801), each borrows one of theirs.
 */
exports.borrowedThemes = new Map([
    [Civilizations_2.Australian, Civilizations_1.English],
    [Civilizations_2.Brazilian, Civilizations_1.Greek],
    [Civilizations_2.Chukchi, Civilizations_1.Aztec],
    [Civilizations_2.Ethiopian, Civilizations_1.Mongol],
    [Civilizations_2.Inca, Civilizations_1.Aztec],
    [Civilizations_2.Indonesian, Civilizations_1.Babylonian],
    [Civilizations_2.Japanese, Civilizations_1.Chinese],
    [Civilizations_2.Khmer, Civilizations_1.Indian],
    [Civilizations_2.Kongo, Civilizations_1.Mongol],
    [Civilizations_2.Malian, Civilizations_1.Roman],
    [Civilizations_2.Sioux, Civilizations_1.Egyptian],
    [Civilizations_2.Viking, Civilizations_1.Russian],
]);
const registerNationalThemes = (attributeRegistry = AttributeRegistry_1.instance) => exports.borrowedThemes.forEach((Lender, CivilizationType) => attributeRegistry.register(new Attribute_1.default(CivilizationType, 'nationalTheme', registerNationalThemes_1.nationalThemes.get(Lender))));
exports.registerNationalThemes = registerNationalThemes;
exports.default = exports.registerNationalThemes;
//# sourceMappingURL=registerNationalThemes.js.map