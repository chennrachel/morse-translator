import { englishToMorse } from "./englishToMorse.js";
import { morseToEnglish } from "./morseToEnglish.js";

let engToMorse = false;


const changeTranslatorInput = () => {
    getOption();
    englishBox.classList.toggle("readOnly");
    morseBox.classList.toggle("readOnly");
    if (input=="morsecode") {
        englishBox.setAttribute("readonly", "")
        morseBox.removeAttribute("readonly", "")
        document.querySelector('.other-lang').textContent = 'English';
        engToMorse = false;
        spanMorse.style['order'] = 1;
        spanEng.style['order'] = 2;

    }
    else {
        morseBox.setAttribute("readonly", "")
        englishBox.removeAttribute("readonly", "")
        document.querySelector('.other-lang').textContent = 'Morse Code'
        engToMorse = true;
        spanEng.style['order'] = 1;
        spanMorse.style['order'] = 2;
    }
}

const getOption = () => {
    morseBox.value= '';
    englishBox.value = '';
    return input = selectElement.value;
}

const showMorseToEng = (event) => {
    if (engToMorse == false) {
        englishBox.value = morseToEnglish(event.path[0].value);
    }
}

const showEngToMorse = (event) => {
    if (engToMorse == true) {
        morseBox.value = englishToMorse(event.path[0].value);
    }
}

let selectElement = document.querySelector('#drop-down');
let input = '';
let dropDown = document.getElementById("drop-down");
let englishBox = document.getElementById("translator__input--eng");
let morseBox = document.getElementById("translator__input--morse");
let spanMorse = document.getElementById("spanmorse");
let spanEng = document.getElementById("spaneng");

morseBox.addEventListener('keyup', showMorseToEng);
englishBox.addEventListener('keyup', showEngToMorse);
dropDown.addEventListener('change', changeTranslatorInput);
