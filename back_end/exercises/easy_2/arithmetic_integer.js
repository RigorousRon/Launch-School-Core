//Write a program that prompts the user for two positive integers, and then
//prints the results of the following operations on those two numbers: addition,
// subtraction, product, quotient, remainder, and power. Do not worry about
//validating the input.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getFirstNumber() {
  prompt('Enter the first number:');
  let number1 = Number(readline.question());

  return number1;
}

function getSecondNumber() {
  prompt('Enter the second number:');
  let number2 = Number(readline.question());

  return number2;
}

function displayCalculations(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${num1 / num2}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

let number1 = getFirstNumber();
let number2 = getSecondNumber();

displayCalculations(number1, number2);