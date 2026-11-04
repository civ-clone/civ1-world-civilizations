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
import registerCivilizations from './registerCivilizations';
import registerEarthStartTiles from './registerEarthStartTiles';
import registerLeaders from './registerLeaders';
import registerNationalThemes from './registerNationalThemes';
import registerTraits from './registerTraits';

registerCivilizations();
registerLeaders();
registerNationalThemes();
registerTraits();
registerEarthStartTiles();
