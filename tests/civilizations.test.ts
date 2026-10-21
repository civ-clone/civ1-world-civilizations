import * as Civilizations from '../Civilizations';
import * as Leaders from '../Leaders';
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
import Civilization from '@civ-clone/core-civilization/Civilization';
import CityNameRegistry from '@civ-clone/core-civilization/CityNameRegistry';
import Leader from '@civ-clone/core-civilization/Leader';
import { earthMaps } from '@civ-clone/civ1-earth-generator/EarthMaps';
import earthStartTiles from '../EarthStartTiles';
import registerCiv1CityNames from '@civ-clone/civ1-civilization/registerCityNames';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import { instance as civilizationRegistryInstance } from '@civ-clone/core-civilization/CivilizationRegistry';
import { instance as earthStartTileRegistryInstance } from '@civ-clone/civ1-earth-generator/EarthStartTileRegistry';
import { instance as leaderRegistryInstance } from '@civ-clone/core-civilization/LeaderRegistry';
import { instance as traitRegistryInstance } from '@civ-clone/core-civilization/TraitRegistry';
import '../index';

const civilizations = Object.values(Civilizations) as (typeof Civilization)[],
  leaders = Object.values(Leaders) as (typeof Leader)[],
  axes = [
    [Friendly, NormalAggression, Aggressive],
    [Perfectionist, NormalDevelopment, Expansionist],
    [Militaristic, NormalMilitarism, Civilized],
  ];

describe('civ1-world-civilizations', (): void => {
  it('registers the 12 civilizations', (): void => {
    expect(civilizations).to.have.lengthOf(12);

    civilizations.forEach((CivilizationType) =>
      expect(
        civilizationRegistryInstance
          .entries()
          .filter((Registered) => Registered === CivilizationType)
      ).to.have.lengthOf(1)
    );
  });

  it('gives each civilization a people, a nation, two colours and a leader', (): void => {
    civilizations.forEach((CivilizationType) => {
      const names = attributeRegistryInstance
        .getByCivilization(CivilizationType)
        .map((attribute) => attribute.name());

      expect(names).to.include.members(['people', 'nation', 'colors']);
      expect(leaderRegistryInstance.getByCivilization(CivilizationType)).to.not
        .be.empty;
    });
  });

  it("registers every leader, with one trait on each of Civ1's three axes", (): void => {
    expect(leaders).to.have.lengthOf(20);

    leaders.forEach((LeaderType) => {
      expect(
        leaderRegistryInstance
          .entries()
          .filter((Registered) => Registered === LeaderType)
      ).to.have.lengthOf(1);
      expect(civilizations).to.include(LeaderType.civilization());

      const traits = traitRegistryInstance
        .entries()
        .filter((trait) => trait.leader() === LeaderType);

      axes.forEach((axis) =>
        expect(
          traits.filter((trait) =>
            axis.some((TraitType) => trait instanceof TraitType)
          ),
          `${LeaderType.name}`
        ).to.have.lengthOf(1)
      );
    });
  });

  earthMaps.forEach((map) => {
    const size = `${map.width}x${map.height}`,
      rows = map.terrain.split('\n'),
      starts = [
        ...map.startTiles.map(([, coordinates]) => coordinates),
        ...earthStartTiles.map(([, startTiles]) => startTiles[size]),
      ];

    it(`starts each civilization on Grassland, Plains or River at ${map.width} x ${map.height}`, (): void => {
      earthStartTiles.forEach(([, startTiles]) => {
        const { x, y } = startTiles[size];

        expect('GPR').to.include(rows[y][x]);
      });
    });

    it(`keeps every start, Civilization's own included, at least 5 apart at ${map.width} x ${map.height}`, (): void => {
      starts.forEach((a, i) =>
        starts.slice(i + 1).forEach((b) => {
          const dx = Math.abs(a.x - b.x);

          expect(
            Math.hypot(Math.min(dx, map.width - dx), a.y - b.y)
          ).to.be.at.least(5);
        })
      );
    });
  });

  it("registers each civilization's Earth start tiles", (): void => {
    civilizations.forEach((CivilizationType) =>
      expect(
        earthStartTileRegistryInstance
          .entries()
          .filter(
            (startTile) => startTile.civilizationType() === CivilizationType
          )
      ).to.have.lengthOf(1)
    );
  });

  // Civ1's spare names go to any civilization that has run out of its own, so one of these there could name two cities.
  it("doesn't share a city name with Civ1's spare names", (): void => {
    const spare = new CityNameRegistry();

    registerCiv1CityNames(spare);

    const spareNames = spare.entries().map((cityName) => cityName.name()),
      names = cityNameRegistryInstance
        .entries()
        .filter((cityName) =>
          civilizations.includes(cityName.civilization() as typeof Civilization)
        )
        .map((cityName) => cityName.name());

    expect(names).to.not.be.empty;
    expect(names.filter((name) => spareNames.includes(name))).to.eql([]);
  });
});
