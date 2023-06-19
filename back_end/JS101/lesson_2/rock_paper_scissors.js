const game = (() => {
  const readline = require('readline-sync');
  const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const VALID_SHORT = ['r', 'p', 'sc', 'l', 'sp'];
  const PLAY_AGAIN_CHOICES = ['y', 'n', 'yes', 'no'];
  const RESULTS = ['win', 'tie', 'loss'];
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
  const WINNING_SCORE = 3;
  const RESET_SCORE = 0;
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

  function determineWinner(choice, cpuChoice) {
    if ((SHORT[choice] === undefined && RULES[choice].includes(cpuChoice)) ||
        (RULES[choice] === undefined && SHORT[choice].includes(cpuChoice))) {
      return RESULTS[0];
    } else if (choice === cpuChoice) {
      return RESULTS[1];
    } else {
      return RESULTS[2];
    }
  }

  function displayWinner(choice, cpuChoice, winStatus) {
    prompt(`You chose ${choice}, computer chose ${cpuChoice}`);

    if (winStatus === RESULTS[0]) {
      prompt('You win!');
    } else if (winStatus === RESULTS[1]) {
      prompt("It's a tie");
    } else {
      prompt("Computer Wins!");
    }
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
    if (winStatus === RESULTS[0]) {
      playerScore += 1;
    } else if (winStatus === RESULTS[2]) {
      cpuScore += 1;
    }
  }

  function determineGameOver(playerScore, cpuScore) {
    return (playerScore === WINNING_SCORE || cpuScore === WINNING_SCORE);
  }

  function displayGrandWinner(playerScore, cpuScore) {
    if (playerScore === WINNING_SCORE) {
      prompt("You're the Grand Winner!");
    } else if (cpuScore === WINNING_SCORE) {
      prompt("Computer is the Grand Winner!");
    }
  }

  function validatePlayChoice (answer) {
    while (!PLAY_AGAIN_CHOICES.includes(answer)) {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    return answer;
  }

  function keepPlaying() {
    prompt('Do you want to keep playing? (y/n)?');
    lineBreak();
    let answer = readline.question().toLowerCase();

    return validatePlayChoice(answer);
  }

  function chooseResetGame() {
    prompt('Do you want play again? (y/n)?');
    lineBreak();
    let answer = readline.question().toLowerCase();
    answer = validatePlayChoice(answer);

    if (PLAY_AGAIN_CHOICES[0].includes(answer) ||
        PLAY_AGAIN_CHOICES[2].includes(answer)) {
      playerScore = RESET_SCORE;
      cpuScore = RESET_SCORE;
      gameOver = false;
      updateGameBoard();
    }
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

  return {
    play() {
      while (!gameOver) {
        updateGameBoard();

        let choice = getPlayerChoice();
        choice = choiceIsValid(choice);
        let computerChoice = getCpuChoice(choice);

        let winStatus = determineWinner(choice, computerChoice);
        incrementScore(winStatus);

        updateGameBoard();
        displayWinner(choice, computerChoice, winStatus);

        gameOver = determineGameOver(playerScore, cpuScore);

        if (gameOver === true) {
          displayEndGame(choice, computerChoice);
          chooseResetGame();
        } else {
          let keepPlayingAnswer = keepPlaying();

          if (keepPlayingAnswer[0] !== 'y') break;
        }
      }
    }
  };
})();

game.play();