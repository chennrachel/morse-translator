import { describe, it, expect } from "@jest/globals";
import {englishToMorse} from './englishToMorse.js';
import {morseToEnglish} from './morseToEnglish';
import {englishMorseObj} from '../data/englishMorseObj';

describe('englishToMorseTest', () => {
    it('should translate characters from English to Morse', () => {
        expect(englishToMorse('a')).toStrictEqual('.-');
        expect(englishToMorse('D')).toStrictEqual('-..');
        expect(englishToMorse('z')).toStrictEqual('--..');
        expect(englishToMorse('9')).toStrictEqual('----.');
        expect(englishToMorse('!')).toStrictEqual('-.-.--');
        expect(englishToMorse('?')).toStrictEqual('..--..');
    });
    it('should translate word/s from English to Morse, ignoring whitespace on ends of word', () => {
        expect(englishToMorse(' hello')).toStrictEqual('.... . .-.. .-.. ---');
        expect(englishToMorse('wIthCapS ')).toStrictEqual('.-- .. - .... -.-. .- .--. ...');
        expect(englishToMorse('CapiTalS aNd SpaCes')).toStrictEqual('-.-. .- .--. .. - .- .-.. ... / .- -. -.. / ... .--. .- -.-. . ...');
        expect(englishToMorse('SymBolS, NumB3r5, CaPs &SpacEs!')).toStrictEqual('... -.-- -- -... --- .-.. ... --..-- / -. ..- -- -... ...-- .-. ..... --..-- / -.-. .- .--. ... / .-... ... .--. .- -.-. . ... -.-.--');
    });
    it('should return an error when invalid characters are inputted', () => {
        expect(englishToMorse('^')).toBe('Error: invalid character');
        expect(englishToMorse('hi#s')).toBe('Error: invalid character');
        expect(englishToMorse('>123')).toBe('Error: invalid character');
    });
});

describe('morseToEnglishTest', () => {
    it('should translate characters from Morse to English', () => {
        expect(morseToEnglish('.....')).toStrictEqual('5');
        expect(morseToEnglish('-.-.')).toStrictEqual('c');
        expect(morseToEnglish('.--.')).toStrictEqual('p');
        expect(morseToEnglish('-.-.--')).toStrictEqual('!');
        expect(morseToEnglish('.--.-.')).toStrictEqual('@');
    });
    it('should translate word/s from Morse to English', () => {
        expect(morseToEnglish('.... --- .-- -.. -.--')).toStrictEqual('howdy');
        expect(morseToEnglish('.-- --- .-. -.. ... / ... . .--. .- .-. .- - . -.. / -... -.-- / ... .-.. .- ... ....')).toStrictEqual('words separated by slash');
        expect(morseToEnglish('... -.-- -- -... --- .-.. ... / .- ... / .-- . .-.. .-.. -.-.-- -.-.-- ..--..')).toStrictEqual('symbols as well!!?');
    });
    it('should return an error when invalid characters are inputted', () => {
        expect(morseToEnglish('a')).toBe('Error: invalid morse code character/s');
        expect(morseToEnglish('!?@$')).toBe('Error: invalid morse code character/s');
        expect(morseToEnglish('..  --')).toBe('Error: invalid morse code character/s');
    });
});