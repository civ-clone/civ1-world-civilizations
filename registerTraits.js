"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTraits = void 0;
const Leaders_1 = require("./Leaders");
const Traits_1 = require("@civ-clone/library-civilization/Traits");
const TraitRegistry_1 = require("@civ-clone/core-civilization/TraitRegistry");
// Each leader's Mood (Friendly to Aggressive), Policy (Perfectionist to Expansionist) and Ideology (Militaristic to
//  Civilized), as civ1-civilization gives Civilization's own leaders. They're drawn from how later Civilization games
//  play these leaders (civ-clone/web-renderer#466); civ1-civilization's personality rules act on them.
const registerTraits = (traitRegistry = TraitRegistry_1.instance) => {
    [
        [Leaders_1.SittingBull, Traits_1.NormalAggression, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.Pachacuti, Traits_1.NormalAggression, Traits_1.Expansionist, Traits_1.NormalMilitarism],
        [Leaders_1.HuaynaCapac, Traits_1.Aggressive, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.PedroII, Traits_1.Friendly, Traits_1.Perfectionist, Traits_1.Civilized],
        [Leaders_1.MansaMusa, Traits_1.Friendly, Traits_1.NormalDevelopment, Traits_1.Civilized],
        [Leaders_1.SundiataKeita, Traits_1.NormalAggression, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.MvembaANzinga, Traits_1.Friendly, Traits_1.NormalDevelopment, Traits_1.Civilized],
        [Leaders_1.NzingaMbande, Traits_1.Aggressive, Traits_1.NormalDevelopment, Traits_1.Militaristic],
        [Leaders_1.MenelikII, Traits_1.NormalAggression, Traits_1.Perfectionist, Traits_1.Militaristic],
        [Leaders_1.HaileSelassie, Traits_1.Friendly, Traits_1.Perfectionist, Traits_1.Civilized],
        [Leaders_1.RagnarLodbrok, Traits_1.Aggressive, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.HaraldHardrada, Traits_1.Aggressive, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.JayavarmanVII, Traits_1.NormalAggression, Traits_1.Perfectionist, Traits_1.Civilized],
        [Leaders_1.SuryavarmanII, Traits_1.Aggressive, Traits_1.Expansionist, Traits_1.NormalMilitarism],
        [Leaders_1.GajahMada, Traits_1.Aggressive, Traits_1.Expansionist, Traits_1.Militaristic],
        [Leaders_1.Gitarja, Traits_1.NormalAggression, Traits_1.Expansionist, Traits_1.NormalMilitarism],
        [Leaders_1.OdaNobunaga, Traits_1.Aggressive, Traits_1.NormalDevelopment, Traits_1.Militaristic],
        [Leaders_1.TokugawaIeyasu, Traits_1.NormalAggression, Traits_1.Perfectionist, Traits_1.Militaristic],
        [Leaders_1.JohnCurtin, Traits_1.Friendly, Traits_1.Expansionist, Traits_1.NormalMilitarism],
        [Leaders_1.AmulyatKhergyntov, Traits_1.Aggressive, Traits_1.NormalDevelopment, Traits_1.Militaristic],
    ].forEach(([LeaderType, ...traits]) => traits.forEach((TraitType) => traitRegistry.register(new TraitType(LeaderType))));
};
exports.registerTraits = registerTraits;
exports.default = exports.registerTraits;
//# sourceMappingURL=registerTraits.js.map