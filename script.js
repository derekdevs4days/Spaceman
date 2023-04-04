/*----- constants -----*/
const wordBank = [
  'ASTEROID',
  'COMET',
  'NEBULA',
  'ORBIT',
  'PLANET',
  'METEOR',
  'STAR',
  'MOON',
  'GALAXY',
  'TELESCOPE',
  'COSMIC',
  'COSMOS',
  'GRAVITY',
  'UNIVERSE',
  'ALIEN',
  'ECLIPSE',
  'HORIZON',
  'EXPLORATION',
  'INTERSTELLAR',
  'CONSTELLATION',
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
let isSecretWordDivCreated;
let playerCurrentGuess;
let fuelCapacity;
let message;

/*----- cached elements  -----*/
const letterDivs = document.querySelectorAll('#alphabet div');
const secretWordContainer = document.getElementById('secretWordContainer');
const fuelCapacityEl = document.getElementById('fuel-number');
const messageBox = document.getElementById('message');
const rocket = document.getElementById('rocket');
/*----- event listeners -----*/
document.getElementById('alphabet').addEventListener('click', performGameLogic);

/*----- functions -----*/
initialize();

// Initialize and Initialize Helpers
function initialize() {
  secretWord = chooseSecretWord();
  isSecretWordDivCreated = false;
  playerCurrentGuess = '';
  fuelCapacity = 10;
  message = 'Guess the word correctly to make it home!';

  render();
}

function chooseSecretWord() {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

// Render and Render Helpers
function render() {
  renderAlphabet();
  if (!isSecretWordDivCreated) renderSecredWordDiv();
  renderMainInfo();
}

function renderAlphabet() {
  letterDivs.forEach((div, idx) => {
    div.innerText = alphabet[idx];
    if (alphabet[idx] === '') {
      div.style.backgroundColor = 'red';
    }
    if (alphabet[idx].endsWith(' ')) {
      div.style.backgroundColor = 'green';
    }
  });
}

function renderSecredWordDiv() {
  let len = secretWord.length;

  while (len > 0) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'secretLetter');
    secretWordContainer.appendChild(newDiv);
    len--;
  }

  isSecretWordDivCreated = true;
}

function renderMainInfo() {
  fuelCapacityEl.innerText = fuelCapacity;
  messageBox.innerText = message;
}

//Controller Functions and Helpers

function performGameLogic(e) {
  if (e.target.tagName !== 'DIV') return;
  if (e.target.style.backgroundColor !== '') return;
  const eventTarget = e.target;
  console.dir(eventTarget);

  isCorrectGuess(eventTarget);
  render();
}

function isCorrectGuess(e) {
  const secretLetter = document.querySelectorAll('#secretLetter');
  console.log(secretWord);
  let isCorrect = false;
  for (let i = 0; i < secretWord.length; i++) {
    let letter = secretWord[i];
    let idx = alphabet.indexOf(letter);
    if (letter === e.textContent) {
      secretLetter[i].innerText = letter;
      alphabet[idx] += ' ';
      message = 'Nice Guess!';
      isCorrect = true;
    }
  }

  if (!isCorrect) {
    rotateRocket();
    fuelCapacity--;
    let idx = alphabet.indexOf(e.textContent);
    alphabet[idx] = '';
    message = 'Try again!';
  }
}

function rotateRocket() {
  rocket.classList.add('rocket-flip');
  setTimeout(function () {
    rocket.classList.remove('rocket-flip');
  }, 1000);
}

// function

tsParticles
  .loadJSON('tsparticles', 'options.json')
  .then((container) => {
    console.log('callback - tsparticles config loaded');
  })
  .catch((error) => {
    console.error(error);
  });
