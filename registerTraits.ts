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
  Aggressive,
  Civilized,
  Expansionist,
  Friendly,
  Militaristic,
  NormalAggression,
  NormalDevelopment,
  NormalMilitarism,
  Perfectionist,
} from '@civ-clone/library-civilization/Traits';
import {
  TraitRegistry,
  instance as traitRegistryInstance,
} from '@civ-clone/core-civilization/TraitRegistry';
import Leader from '@civ-clone/core-civilization/Leader';

type LeaderTrait =
  | typeof Friendly
  | typeof NormalAggression
  | typeof Aggressive
  | typeof Perfectionist
  | typeof NormalDevelopment
  | typeof Expansionist
  | typeof Civilized
  | typeof NormalMilitarism
  | typeof Militaristic;

// Each leader's Mood (Friendly to Aggressive), Policy (Perfectionist to Expansionist) and Ideology (Militaristic to
//  Civilized), as civ1-civilization gives Civilization's own leaders. They're drawn from how later Civilization games
//  play these leaders (civ-clone/web-renderer#466); civ1-civilization's personality rules act on them.
export const registerTraits: (traitRegistry?: TraitRegistry) => void = (
  traitRegistry: TraitRegistry = traitRegistryInstance
): void => {
  (
    [
      [SittingBull, NormalAggression, Expansionist, Militaristic],
      [Pachacuti, NormalAggression, Expansionist, NormalMilitarism],
      [HuaynaCapac, Aggressive, Expansionist, Militaristic],
      [PedroII, Friendly, Perfectionist, Civilized],
      [MansaMusa, Friendly, NormalDevelopment, Civilized],
      [SundiataKeita, NormalAggression, Expansionist, Militaristic],
      [MvembaANzinga, Friendly, NormalDevelopment, Civilized],
      [NzingaMbande, Aggressive, NormalDevelopment, Militaristic],
      [MenelikII, NormalAggression, Perfectionist, Militaristic],
      [HaileSelassie, Friendly, Perfectionist, Civilized],
      [RagnarLodbrok, Aggressive, Expansionist, Militaristic],
      [HaraldHardrada, Aggressive, Expansionist, Militaristic],
      [JayavarmanVII, NormalAggression, Perfectionist, Civilized],
      [SuryavarmanII, Aggressive, Expansionist, NormalMilitarism],
      [GajahMada, Aggressive, Expansionist, Militaristic],
      [Gitarja, NormalAggression, Expansionist, NormalMilitarism],
      [OdaNobunaga, Aggressive, NormalDevelopment, Militaristic],
      [TokugawaIeyasu, NormalAggression, Perfectionist, Militaristic],
      [JohnCurtin, Friendly, Expansionist, NormalMilitarism],
      [AmulyatKhergyntov, Aggressive, NormalDevelopment, Militaristic],
    ] as [typeof Leader, ...LeaderTrait[]][]
  ).forEach(([LeaderType, ...traits]): void =>
    traits.forEach((TraitType: LeaderTrait): void =>
      traitRegistry.register(new TraitType(LeaderType))
    )
  );
};

export default registerTraits;
