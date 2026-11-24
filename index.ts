// Each civilization's attributes and city names.
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
import {
  AttributeRegistry,
  instance as attributeRegistryInstance,
} from '@civ-clone/core-civilization/AttributeRegistry';
import {
  CivilizationRegistry,
  instance as civilizationRegistryInstance,
} from '@civ-clone/core-civilization/CivilizationRegistry';
import {
  LeaderRegistry,
  instance as leaderRegistryInstance,
} from '@civ-clone/core-civilization/LeaderRegistry';
import {
  EarthStartTileRegistry,
  instance as earthStartTileRegistryInstance,
} from '@civ-clone/civ1-earth-generator/EarthStartTileRegistry';
import {
  TraitRegistry,
  instance as traitRegistryInstance,
} from '@civ-clone/core-civilization/TraitRegistry';
import registerCivilizations from './registerCivilizations';
import registerEarthStartTiles from './registerEarthStartTiles';
import registerLeaders from './registerLeaders';
import registerNationalThemes from './registerNationalThemes';
import registerTraits from './registerTraits';

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
export const register = (game: Registries): void => {
  registerCivilizations(game.civilizations);
  registerLeaders(game.leaders);
  registerNationalThemes(game.attributes);
  registerTraits(game.traits);
  registerEarthStartTiles(game.earthStartTiles);
};

// The plugin loader imports this for its side effects. Until it passes a game of its own, everything goes into the
//  module registries, which are the default game's.
register({
  attributes: attributeRegistryInstance,
  civilizations: civilizationRegistryInstance,
  earthStartTiles: earthStartTileRegistryInstance,
  leaders: leaderRegistryInstance,
  traits: traitRegistryInstance,
});

export default register;
