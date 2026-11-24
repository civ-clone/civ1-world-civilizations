import '@civ-clone/base-civilization-sioux';
import '@civ-clone/base-civilization-inca';
import '@civ-clone/base-civilization-brazilian';
import '@civ-clone/base-civilization-malian';
import '@civ-clone/base-civilization-kongo';
import '@civ-clone/base-civilization-ethiopian';
import '@civ-clone/base-civilization-viking';
import '@civ-clone/base-civilization-khmer';
import '@civ-clone/base-civilization-indonesian';
import '@civ-clone/base-civilization-japanese';
import '@civ-clone/base-civilization-australian';
import '@civ-clone/base-civilization-chukchi';
import { AttributeRegistry } from '@civ-clone/core-civilization/AttributeRegistry';
import { CivilizationRegistry } from '@civ-clone/core-civilization/CivilizationRegistry';
import { LeaderRegistry } from '@civ-clone/core-civilization/LeaderRegistry';
import { EarthStartTileRegistry } from '@civ-clone/civ1-earth-generator/EarthStartTileRegistry';
import { TraitRegistry } from '@civ-clone/core-civilization/TraitRegistry';
/**
 * The registries `register` fills, named after `Game`'s slots (`earthStartTiles` is civ1-game's), so a loader can pass
 *  its game.
 */
export interface Registries {
  attributes: AttributeRegistry;
  civilizations: CivilizationRegistry;
  earthStartTiles: EarthStartTileRegistry;
  leaders: LeaderRegistry;
  traits: TraitRegistry;
}
/**
 * The world's civilizations, leaders, traits, national themes and Earth start squares into a game's own registries, so
 *  a game built with its own gets them (civ-clone/web-renderer#370).
 *
 * The base-civilization-* packages imported above still register their attributes and city names at import.
 */
export declare const register: (game: Registries) => void;
export default register;
