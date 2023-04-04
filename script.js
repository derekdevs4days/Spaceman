/*----- constants -----*/
const wordBank = [
  "asteroid",
  "comet",
  "nebula",
  "orbit",
  "planet",
  "meteor",
  "star",
  "moon",
  "galaxy",
  "telescope",
  "cosmic",
  "cosmos",
  "gravity",
  "universe",
  "alien",
  "eclipse",
  "horizon",
  "exploration",
  "interstellar",
  "constellation"
];
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/*----- state variables -----*/
let secretWord;
let playerCurrentGuess;
let numberOfGuesses;


/*----- cached elements  -----*/
const letterDivs = document.querySelectorAll('#alphabet div');
const secretWordContainer = document.getElementById('secretWordContainer');

/*----- event listeners -----*/


/*----- functions -----*/
initialize();


// Initialize and Initialize Helpers
function initialize() {
  secretWord = chooseSecretWord();
  playerCurrentGuess = '';
  numberOfGuesses = 0;
}

function chooseSecretWord() {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}


// Render and Render Helpers
function render() {
  createAlphabet();
  createSecredWordDiv()
}

function createAlphabet() {
  letterDivs.forEach((div, idx) => { 
    div.innerText = alphabet[idx]
    if (alphabet[idx] === '') {
      div.style.backgroundColor = 'red'
    }
  });
}

function createSecredWordDiv() {
  let len = secretWord.length;
  
  while(len > 0) {
    const newDiv = document.createElement("div")
    secretWordContainer.appendChild(newDiv);
    len --;
  }
}