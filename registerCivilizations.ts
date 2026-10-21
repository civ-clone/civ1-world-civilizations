import {
  Sioux,
  Inca,
  Brazilian,
  Malian,
  Kongo,
  Ethiopian,
  Viking,
  Khmer,
  Indonesian,
  Japanese,
  Australian,
  Chukchi,
} from './Civilizations';
import {
  CivilizationRegistry,
  instance as civilizationRegistryInstance,
} from '@civ-clone/core-civilization/CivilizationRegistry';

export const registerCivilizations: (
  civilizationRegistry?: CivilizationRegistry
) => void = (
  civilizationRegistry: CivilizationRegistry = civilizationRegistryInstance
): void => {
  civilizationRegistry.register(
    Sioux,
    Inca,
    Brazilian,
    Malian,
    Kongo,
    Ethiopian,
    Viking,
    Khmer,
    Indonesian,
    Japanese,
    Australian,
    Chukchi
  );
};

export default registerCivilizations;
