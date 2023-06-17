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

function clearConsole() {
  console.clear();
}

function lineBreak() {
  console.log('<------------------------------------------------------>');
}

function displayRules() {
  lineBreak();
  prompt('First to 3 wins is the Grand Winner!');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt(`(Valid shorthand input: ${VALID_SHORT.join(', ')})`);
}

function getPlayerChoice () {
  let choice = readline.question().toLowerCase();
  debugger;
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
  if ((SHORT[choice] === undefined && RULES[choice].includes(cpuChoice)) ||
      (RULES[choice] === undefined && SHORT[choice].includes(cpuChoice))) {
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

function determineGameOver(playerScore, cpuScore) {
  if (playerScore === 3 || cpuScore === 3) {
    return true;
  }

  return false;
}

function displayGrandWinner(playerScore, cpuScore) {
  if (playerScore === 3) {
    prompt("You're the Grand Winner!");
  } else if (cpuScore === 3) {
    prompt("Computer is the Grand Winner!");
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  lineBreak();
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  debugger;
  return answer;
}

function updateGameBoard() {
  clearConsole();
  displayRules();
  displayScore(playerScore, cpuScore);
  lineBreak();
}

function displayEndGame(choice, computerChoice) {
  updateGameBoard();
  displayWinner(choice, computerChoice);
  displayGrandWinner(playerScore, cpuScore);
  lineBreak();
}

while (!gameOver) {
  updateGameBoard();

  let choice = getPlayerChoice();
  choice = choiceIsValid(choice);
  let computerChoice = getCpuChoice(choice);

  let winStatus = displayWinner(choice, computerChoice);
  incrementScore(winStatus);

  updateGameBoard();
  displayWinner(choice, computerChoice);

  gameOver = determineGameOver(playerScore, cpuScore);

  if (gameOver === true) {
    displayEndGame(choice, computerChoice);
    break;
  }

  let answer = playAgain();

  if (answer[0] !== 'y') break;
}