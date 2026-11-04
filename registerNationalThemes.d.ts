import { AttributeRegistry } from '@civ-clone/core-civilization/AttributeRegistry';
import Civilization from '@civ-clone/core-civilization/Civilization';
/**
 * Civ1's music has a national theme only for its own 14 civilizations, so until these have themes of their own
 *  (civ-clone/web-renderer#801), each borrows one of theirs.
 */
export declare const borrowedThemes: Map<
  typeof Civilization,
  typeof Civilization
>;
export declare const registerNationalThemes: (
  attributeRegistry?: AttributeRegistry
) => void;
export default registerNationalThemes;
