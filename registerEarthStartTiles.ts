import {
  EarthStartTileRegistry,
  instance as earthStartTileRegistryInstance,
} from '@civ-clone/civ1-earth-generator/EarthStartTileRegistry';
import EarthStartTile from '@civ-clone/civ1-earth-generator/EarthStartTile';
import earthStartTiles from './EarthStartTiles';

export const registerEarthStartTiles: (
  earthStartTileRegistry?: EarthStartTileRegistry
) => void = (
  earthStartTileRegistry: EarthStartTileRegistry = earthStartTileRegistryInstance
): void =>
  earthStartTileRegistry.register(
    ...earthStartTiles.map(
      ([CivilizationType, startTiles]) =>
        new EarthStartTile(CivilizationType, startTiles)
    )
  );

export default registerEarthStartTiles;
