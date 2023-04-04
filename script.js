/*----- constants -----*/
const wordBank = [
  'asteroid',
  'comet',
  'nebula',
  'orbit',
  'planet',
  'meteor',
  'star',
  'moon',
  'galaxy',
  'telescope',
  'cosmic',
  'cosmos',
  'gravity',
  'universe',
  'alien',
  'eclipse',
  'horizon',
  'exploration',
  'interstellar',
  'constellation',
];
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

/*----- state variables -----*/
let secretWord;
let playerCurrentGuess;
let fuelCapacity;
let message;

/*----- cached elements  -----*/
const letterDivs = document.querySelectorAll('#alphabet div');
const secretWordContainer = document.getElementById('secretWordContainer');
const fuelCapacityEl = document.getElementById('fuel-number');
const messageBox = document.getElementById('message');
/*----- event listeners -----*/

/*----- functions -----*/
initialize();

// Initialize and Initialize Helpers
function initialize() {
  secretWord = chooseSecretWord();
  playerCurrentGuess = '';
  fuelCapacity = 10;
  message = 'Guess the word correctly to make it home!';
}

function chooseSecretWord() {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

// Render and Render Helpers
function render() {
  renderAlphabet();
  renderSecredWordDiv();
}

function renderAlphabet() {
  letterDivs.forEach((div, idx) => {
    div.innerText = alphabet[idx];
    if (alphabet[idx] === '') {
      div.style.backgroundColor = 'red';
    }
  });
}

function renderSecredWordDiv() {
  let len = secretWord.length;

  while (len > 0) {
    const newDiv = document.createElement('div');
    secretWordContainer.appendChild(newDiv);
    len--;
  }
}

function renderMainInfo() {
  fuelCapacityEl.innerText = fuelCapacity;
  messageBox.innerText = message;
}
