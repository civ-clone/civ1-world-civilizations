"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLeaders = void 0;
const Leaders_1 = require("./Leaders");
const LeaderRegistry_1 = require("@civ-clone/core-civilization/LeaderRegistry");
const registerLeaders = (leaderRegistry = LeaderRegistry_1.instance) => {
    leaderRegistry.register(Leaders_1.SittingBull, Leaders_1.Pachacuti, Leaders_1.HuaynaCapac, Leaders_1.PedroII, Leaders_1.MansaMusa, Leaders_1.SundiataKeita, Leaders_1.MvembaANzinga, Leaders_1.NzingaMbande, Leaders_1.MenelikII, Leaders_1.HaileSelassie, Leaders_1.RagnarLodbrok, Leaders_1.HaraldHardrada, Leaders_1.JayavarmanVII, Leaders_1.SuryavarmanII, Leaders_1.GajahMada, Leaders_1.Gitarja, Leaders_1.OdaNobunaga, Leaders_1.TokugawaIeyasu, Leaders_1.JohnCurtin, Leaders_1.AmulyatKhergyntov);
};
exports.registerLeaders = registerLeaders;
exports.default = exports.registerLeaders;
//# sourceMappingURL=registerLeaders.js.map