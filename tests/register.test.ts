import AttributeRegistry from '@civ-clone/core-civilization/AttributeRegistry';
import CivilizationRegistry from '@civ-clone/core-civilization/CivilizationRegistry';
import EarthStartTileRegistry from '@civ-clone/civ1-earth-generator/EarthStartTileRegistry';
import LeaderRegistry, {
  instance as leaderRegistryInstance,
} from '@civ-clone/core-civilization/LeaderRegistry';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';
import { expect } from 'chai';
import register from '../index';

// A game built with its own registries gets the civilizations, leaders, traits, themes and Earth start squares in them
//  (civ-clone/web-renderer#370).
describe('register', (): void => {
  it("fills a game's own registries", (): void => {
    const game = {
        attributes: new AttributeRegistry(),
        civilizations: new CivilizationRegistry(),
        earthStartTiles: new EarthStartTileRegistry(),
        leaders: new LeaderRegistry(),
        traits: new TraitRegistry(),
      },
      defaultLeaders = leaderRegistryInstance.length;

    register(game);

    expect(game.civilizations.entries()).to.not.be.empty;
    expect(game.leaders.entries()).to.not.be.empty;
    expect(game.traits.entries()).to.not.be.empty;
    expect(game.attributes.entries()).to.not.be.empty;
    expect(game.earthStartTiles.entries()).to.not.be.empty;
    expect(leaderRegistryInstance.length).to.equal(defaultLeaders);
  });
});
