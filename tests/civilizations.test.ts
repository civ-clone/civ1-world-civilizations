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
} from '@civ-clone/civ1-civilization/Traits';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Leader from '@civ-clone/core-civilization/Leader';
import { earthMaps } from '@civ-clone/civ1-earth-generator/EarthMaps';
import earthStartTiles from '../EarthStartTiles';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
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

    civilizations.forEach(
      (CivilizationType) =>
        expect(civilizationRegistryInstance.includes(CivilizationType)).to.be
          .true
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
      expect(leaderRegistryInstance.includes(LeaderType)).to.be.true;
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
    civilizations.forEach(
      (CivilizationType) =>
        expect(
          earthStartTileRegistryInstance
            .entries()
            .some(
              (startTile) => startTile.civilizationType() === CivilizationType
            )
        ).to.be.true
    );
  });
});
