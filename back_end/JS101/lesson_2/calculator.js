/* eslint-disable max-len */
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

// eslint-disable-next-line max-lines-per-function, max-statements
function calculator() {

  function messages(message, lang = 'en') {
    return MESSAGES[lang][message];
  }

  function prompt(msg) {
    console.log(`=> ${msg}`);
  }

  function invalidNumber(num) {
    return num.trimStart() === '' || Number.isNaN(Number(num));
  }

  prompt(messages('greeting', LANGUAGE));

  prompt(messages('firstNumber', LANGUAGE));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('validNumber', LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', LANGUAGE));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('validNumber', LANGUAGE));
    number2 = readline.question();
  }

  prompt(messages('operationSelect', LANGUAGE));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('validOperation', LANGUAGE));
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(messages('resultMessage', LANGUAGE) + output);

  prompt(messages('redoCalculation', LANGUAGE));
  let choice = readline.question();

  while (![messages('yesString', LANGUAGE), messages('noString', LANGUAGE)].includes(choice)) {
    prompt(messages('validChoice', LANGUAGE));
    choice = readline.question();
  }

  if (choice === messages('yesString', LANGUAGE)) {
    calculator();
  }
}

calculator();
