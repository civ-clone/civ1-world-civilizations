"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCivilizations = void 0;
const Civilizations_1 = require("./Civilizations");
const CivilizationRegistry_1 = require("@civ-clone/core-civilization/CivilizationRegistry");
const registerCivilizations = (civilizationRegistry = CivilizationRegistry_1.instance) => {
    civilizationRegistry.register(Civilizations_1.Sioux, Civilizations_1.Inca, Civilizations_1.Brazilian, Civilizations_1.Malian, Civilizations_1.Kongo, Civilizations_1.Ethiopian, Civilizations_1.Viking, Civilizations_1.Khmer, Civilizations_1.Indonesian, Civilizations_1.Japanese, Civilizations_1.Australian, Civilizations_1.Chukchi);
};
exports.registerCivilizations = registerCivilizations;
exports.default = exports.registerCivilizations;
//# sourceMappingURL=registerCivilizations.js.map