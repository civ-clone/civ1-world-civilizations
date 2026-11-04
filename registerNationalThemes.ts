import {
  Aztec,
  Babylonian,
  Chinese,
  Egyptian,
  English,
  Greek,
  Indian,
  Mongol,
  Roman,
  Russian,
} from '@civ-clone/civ1-civilization/Civilizations';
import {
  AttributeRegistry,
  instance as attributeRegistryInstance,
} from '@civ-clone/core-civilization/AttributeRegistry';
import {
  Australian,
  Brazilian,
  Chukchi,
  Ethiopian,
  Inca,
  Indonesian,
  Japanese,
  Khmer,
  Kongo,
  Malian,
  Sioux,
  Viking,
} from './Civilizations';
import Attribute from '@civ-clone/core-civilization/Attribute';
import Civilization from '@civ-clone/core-civilization/Civilization';
import { nationalThemes } from '@civ-clone/civ1-civilization/registerNationalThemes';

/**
 * Civ1's music has a national theme only for its own 14 civilizations, so until these have themes of their own
 *  (civ-clone/web-renderer#801), each borrows one of theirs.
 */
export const borrowedThemes: Map<typeof Civilization, typeof Civilization> =
  new Map<typeof Civilization, typeof Civilization>([
    [Australian, English],
    [Brazilian, Greek],
    [Chukchi, Aztec],
    [Ethiopian, Mongol],
    [Inca, Aztec],
    [Indonesian, Babylonian],
    [Japanese, Chinese],
    [Khmer, Indian],
    [Kongo, Mongol],
    [Malian, Roman],
    [Sioux, Egyptian],
    [Viking, Russian],
  ]);

export const registerNationalThemes: (
  attributeRegistry?: AttributeRegistry
) => void = (
  attributeRegistry: AttributeRegistry = attributeRegistryInstance
): void =>
  borrowedThemes.forEach((Lender, CivilizationType) =>
    attributeRegistry.register(
      new Attribute(
        CivilizationType,
        'nationalTheme',
        nationalThemes.get(Lender)
      )
    )
  );

export default registerNationalThemes;
