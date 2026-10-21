"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earthStartTiles = void 0;
const Civilizations_1 = require("./Civilizations");
// Each civilization's start on every Earth map, from civ1-earth-generator's `tools/earth-maps/world-civilizations.json`.
//  They were placed together with Civilization's own 14, at least 5 tiles from any other.
exports.earthStartTiles = [
    [
        Civilizations_1.Sioux,
        {
            '80x50': { x: 7, y: 15 },
            '104x65': { x: 10, y: 20 },
            '128x80': { x: 12, y: 25 },
        },
    ],
    [
        Civilizations_1.Inca,
        {
            '80x50': { x: 12, y: 35 },
            '104x65': { x: 16, y: 45 },
            '128x80': { x: 21, y: 55 },
        },
    ],
    [
        Civilizations_1.Brazilian,
        {
            '80x50': { x: 20, y: 37 },
            '104x65': { x: 26, y: 48 },
            '128x80': { x: 33, y: 60 },
        },
    ],
    [
        Civilizations_1.Malian,
        {
            '80x50': { x: 30, y: 29 },
            '104x65': { x: 38, y: 39 },
            '128x80': { x: 47, y: 48 },
        },
    ],
    [
        Civilizations_1.Kongo,
        {
            '80x50': { x: 37, y: 36 },
            '104x65': { x: 48, y: 47 },
            '128x80': { x: 59, y: 58 },
        },
    ],
    [
        Civilizations_1.Ethiopian,
        {
            '80x50': { x: 43, y: 31 },
            '104x65': { x: 56, y: 40 },
            '128x80': { x: 70, y: 49 },
        },
    ],
    [
        Civilizations_1.Viking,
        {
            '80x50': { x: 38, y: 10 },
            '104x65': { x: 48, y: 15 },
            '128x80': { x: 60, y: 18 },
        },
    ],
    [
        Civilizations_1.Khmer,
        {
            '80x50': { x: 65, y: 27 },
            '104x65': { x: 84, y: 36 },
            '128x80': { x: 104, y: 44 },
        },
    ],
    [
        Civilizations_1.Indonesian,
        {
            '80x50': { x: 69, y: 32 },
            '104x65': { x: 90, y: 42 },
            '128x80': { x: 111, y: 52 },
        },
    ],
    [
        Civilizations_1.Japanese,
        {
            '80x50': { x: 72, y: 17 },
            '104x65': { x: 95, y: 24 },
            '128x80': { x: 117, y: 29 },
        },
    ],
    [
        Civilizations_1.Australian,
        {
            '80x50': { x: 76, y: 45 },
            '104x65': { x: 98, y: 59 },
            '128x80': { x: 120, y: 73 },
        },
    ],
    [
        Civilizations_1.Chukchi,
        {
            '80x50': { x: 71, y: 8 },
            '104x65': { x: 94, y: 10 },
            '128x80': { x: 115, y: 13 },
        },
    ],
];
exports.default = exports.earthStartTiles;
//# sourceMappingURL=EarthStartTiles.js.map