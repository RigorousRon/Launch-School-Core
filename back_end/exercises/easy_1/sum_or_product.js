//Write a program that asks the user to enter an integer greater than 0, then
//asks whether the user wants to determine the sum or the product of all numbers
//between 1 and the entered integer, inclusive

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getInteger() {
  prompt("Please enter an integer greater than 0:");
  let integer = parseInt(readline.prompt(), 10);
  while (isInvalidInteger(integer)) {
    prompt("Please enter a valid input: (0 or greater)");
    integer = parseInt(readline.prompt(), 10);
  }

  return integer;
}

function isInvalidInteger(integer) {
  const isEmpty = String(integer).trim() === '';
  const isNegative = Number(integer) < 0;
  const isNotANumber = Number.isNaN(Number(integer));

  return isEmpty || isNegative || isNotANumber;
}

let integer = getInteger();

function sumOrProduct() {
  prompt("Enter 's' to compute the sum, or 'p' to compute the product:");
  let choice = readline.prompt().toLowerCase();
  while (isInvalidChoice(choice)) {
    prompt("Please enter a valid choice: ('s' or 'p')");
    choice = readline.prompt();
  }

  return choice;
}

function isInvalidChoice (choice) {
  const isEmpty = choice.trim() === '';
  const validChoices = ['s', 'p'];

  return isEmpty || !validChoices.includes(choice.toLowerCase());
}

let choice = sumOrProduct();

function calculate(choice) {
  let sum = 0;
  let product = 1;
  if (choice === 's') {
    for (let index = 1; index <= integer; index += 1) {
      sum += index;
    }
    return sum;
  } else if (choice === 'p') {
    for (let index = 1; index <= integer; index += 1) {
      product *= index;
    }
    return product;
  }

  return null;
}

let calculation = calculate(choice);

function displayCalculation(choice) {
  if (choice === 's' || choice === 'S') {
    prompt(`Sum of integers between 1 and ${integer} is ${calculation}`);
  } else if (choice === 'p' || choice === 'p') {
    prompt(`Product of integers between 1 and ${integer} is ${calculation}`);
  }
}

displayCalculation(choice);