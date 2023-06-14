const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_SHORT = ['r', 'p', 'sc', 'l', 'sp'];
const RULES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock']
};
const SHORT = {
  r: ['sc', 'l'],
  p: ['r', 'sp'],
  sc: ['p', 'l'],
  l: ['p', 'sp'],
  sp: ['sc', 'r']
};
let playerScore = 0;
let cpuScore = 0;
let gameOver = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function legend() {
  prompt('(Legend: r: rock; p: paper; sc: scissors; l: lizard; s: spock');
}

function getPlayerChoice () {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt(`(Valid shorthand input: ${VALID_SHORT.join(', ')})`);
  let choice = readline.question();

  return choice;
}

function getCpuChoice(choice) {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = verifyChoiceStyle(choice, randomIndex);

  return computerChoice;
}

function choiceIsValid(choice) {
  while (!(VALID_CHOICES.includes(choice) || VALID_SHORT.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return choice;
}

function displayWinner(choice, cpuChoice) {
  let result = '';

  prompt(`You chose ${choice}, computer chose ${cpuChoice}`);
  legend();

  if ((VALID_CHOICES.includes(choice) && RULES[choice].includes(cpuChoice)) ||
      (VALID_SHORT.includes(choice) && SHORT[choice].includes(cpuChoice))) {
    result = 'win';
    prompt('You win!');
  } else if (choice === cpuChoice) {
    result = 'tie';
    prompt("It's a tie");
  } else {
    result = 'loss';
    prompt("Computer Wins!");
  }

  return result;
}

function displayScore(playerScore, cpuScore) {
  prompt(`Player score: ${playerScore}; Cpu score: ${cpuScore}`);
}

function verifyChoiceStyle(choice, randomIndex) {
  if (VALID_CHOICES.includes(choice)) {
    return VALID_CHOICES[randomIndex];
  } else if (VALID_SHORT.includes(choice)) {
    return VALID_SHORT[randomIndex];
  }

  return null; //For eslint rules?
}

function incrementScore(winStatus) {
  if (winStatus === 'win') {
    playerScore += 1;
  } else if (winStatus === 'loss') {
    cpuScore += 1;
  }
}

function determineGrandWinner(playerScore, cpuScore) {
  if (playerScore === 3) {
    prompt("You're the Grand Winner!");
    return true;
  } else if (cpuScore === 3) {
    prompt("Computer is the Grand Winner!");
    return true;
  }

  return false;
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  return answer;
}

while (!gameOver) {
  console.clear();

  let choice = getPlayerChoice();

  choiceIsValid(choice);

  let computerChoice = getCpuChoice(choice);

  let winStatus = displayWinner(choice, computerChoice);

  incrementScore(winStatus);

  displayScore(playerScore, cpuScore);

  gameOver = determineGrandWinner(playerScore, cpuScore);

  let answer = playAgain();

  if (answer[0] !== 'y') break;
}