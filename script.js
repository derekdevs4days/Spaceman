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
let playerGuess;
let fuelCapacity;
let message;

/*----- cached elements  -----*/
const earth = document.getElementById('earth');
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
  playerGuess = 0;
  fuelCapacity = 8;
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
      div.style.backgroundColor = '#2c262635';
    }
    if (alphabet[idx].endsWith(' ')) {
      div.style.backgroundColor = '#00f0006d';
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
  if (fuelCapacity < 3) fuelCapacityEl.style.color = 'red';
  messageBox.innerText = message;
}

//Controller Functions and Helpers

function performGameLogic(e) {
  console.log(playerGuess);
  if (e.target.tagName !== 'DIV') return;
  if (e.target.style.backgroundColor !== '') return;
  const eventTarget = e.target;
  checkCorrectGuess(eventTarget);
  checkWinner();
  render();
}

function checkCorrectGuess(e) {
  const secretLetter = document.querySelectorAll('#secretLetter');

  let isCorrect = false;
  for (let i = 0; i < secretWord.length; i++) {
    let letter = secretWord[i];
    let idx = alphabet.indexOf(letter);
    if (letter === e.textContent) {
      secretLetter[i].innerText = letter;
      alphabet[idx] += ' ';
      playerGuess++;
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

function checkWinner() {
  if (fuelCapacity < 1) {
    message = 'Mission Failed.';
    document
      .getElementById('alphabet')
      .removeEventListener('click', performGameLogic);
    dropRocket();
  }

  if (playerGuess === secretWord.length) {
    message = 'Well done captain!';
    earth.style.backgroundImage = 'url(assets/earth.jpg)';
    earth.style.opacity = 1;
    document
      .getElementById('alphabet')
      .removeEventListener('click', performGameLogic);
  }
}

function rotateRocket() {
  rocket.classList.add('rocket-flip');
  setTimeout(function () {
    rocket.classList.remove('rocket-flip');
  }, 1000);
}

function dropRocket() {
  rocket.classList.add('rocket-fall');
}
//PARTICLES

tsParticles
  .loadJSON('tsparticles', 'options.json')
  .then((container) => {
    console.log('callback - tsparticles config loaded');
  })
  .catch((error) => {
    console.error(error);
  });
