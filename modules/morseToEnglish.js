import englishMorseObj from '../data/englishMorseObj.js';

export const morseToEnglish = (morseString) => {
    // split the string into array of morse (separately by ' ' that represets each letter)
    const array = morseString
                    .trim()
                    .split(" ")
                    .map(item => item)
    // validate all items of the string exist in the englishMOrseObj
    if (array.every(item => Object.values(englishMorseObj).includes(item))) {
        // map a new array that returns the morse code (using find() to match engchar (in englishMorseObj) with char in array)
        const newArray = array.map((char) => {
                return (Object.entries(englishMorseObj).find(
                    ([engchar, morse]) => morse === char))[0];
        })
        // new array joining morse code for each character 
        let morseString = newArray.join("");
        return morseString;
        }
    else return "Error: invalid morse code character/s"
}