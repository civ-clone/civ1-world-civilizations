import {
  SittingBull,
  Pachacuti,
  HuaynaCapac,
  PedroII,
  MansaMusa,
  SundiataKeita,
  MvembaANzinga,
  NzingaMbande,
  MenelikII,
  HaileSelassie,
  RagnarLodbrok,
  HaraldHardrada,
  JayavarmanVII,
  SuryavarmanII,
  GajahMada,
  Gitarja,
  OdaNobunaga,
  TokugawaIeyasu,
  JohnCurtin,
  AmulyatKhergyntov,
} from './Leaders';
import {
  LeaderRegistry,
  instance as leaderRegistryInstance,
} from '@civ-clone/core-civilization/LeaderRegistry';

export const registerLeaders: (leaderRegistry?: LeaderRegistry) => void = (
  leaderRegistry: LeaderRegistry = leaderRegistryInstance
): void => {
  leaderRegistry.register(
    SittingBull,
    Pachacuti,
    HuaynaCapac,
    PedroII,
    MansaMusa,
    SundiataKeita,
    MvembaANzinga,
    NzingaMbande,
    MenelikII,
    HaileSelassie,
    RagnarLodbrok,
    HaraldHardrada,
    JayavarmanVII,
    SuryavarmanII,
    GajahMada,
    Gitarja,
    OdaNobunaga,
    TokugawaIeyasu,
    JohnCurtin,
    AmulyatKhergyntov
  );
};

export default registerLeaders;
