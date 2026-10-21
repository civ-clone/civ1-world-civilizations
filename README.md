# civ1-world-civilizations

Twelve more civilizations for civ-clone's Civ1 rules, filling the parts of the world Civilization's own 14 leave
empty (civ-clone/web-renderer#466):

| Civilization | Leaders |
|---|---|
| Sioux | Sitting Bull |
| Incas | Pachacuti, Huayna Capac |
| Brazilians | Pedro II |
| Malians | Mansa Musa, Sundiata Keita |
| Kongolese | Mvemba a Nzinga, Nzinga Mbande |
| Ethiopians | Menelik II, Haile Selassie |
| Vikings | Ragnar Lodbrok, Harald Hardrada |
| Khmer | Jayavarman VII, Suryavarman II |
| Indonesians | Gajah Mada, Gitarja |
| Japanese | Oda Nobunaga, Tokugawa Ieyasu |
| Australians | John Curtin |
| Chukchi | Amulyat Khergyntov |

Each comes from its own `base-civilization-*` package (people, nation, colours, city names, leaders). This package
registers them into a game with Civ1's personality traits (`civ1-civilization`), and gives each a start tile on every
Earth map (`civ1-earth-generator`). Those start tiles were placed together with Civilization's own 14, at least 5
tiles from any other, by `civ1-earth-generator`'s `tools/earth-maps`.

Leave this package out and the game has Civilization's own 14 civilizations. Their Earth start tiles were placed
alongside these 12, so they're spread out either way. Excluding this package from a build still loads the 12
`base-civilization-*` packages if they're installed, but those only add attributes and city names; without this
package nothing registers the civilizations, so they're never played.
