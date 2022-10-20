import englishMorseObj from '../data/englishMorseObj.js';

export const englishToMorse = (englishString) => {
    // split the string into array of individual letters
    const array = englishString
                    .trim()
                    .split("")
                    .map(n => n.toLowerCase());
    // validate all items of the string exist in the englishMOrseObj
    if (array.every(item => Object.keys(englishMorseObj).includes(item))) {
        // map a new array that returns the morse code (using find() to match engchar (in englishMorseObj) with char in array)
        const newArray = array.map((char) => {
                return (Object.entries(englishMorseObj).find(
                    ([engchar, morse]) => engchar === char))[1];
        })
        // new array joining morse code for each character 
        let morseString = newArray.join(" ");
        return morseString;
        }
    else return 'Error: unknown character'
}