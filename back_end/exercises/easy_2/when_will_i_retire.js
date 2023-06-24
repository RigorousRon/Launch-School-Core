//Build a program that logs when the user will retire and how many more years
//the user has to work until retirement.

/*
Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getCurrentAge() {
  prompt("What is your age?");
  let age = Number(readline.question());

  return age;
}

function getRetirementAge() {
  prompt("At what age would you like to retire?");
  let age = Number(readline.question());

  return age;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function yearsLeft(currentAge, retirementAge) {
  return retirementAge - currentAge;
}

let currentAge = getCurrentAge();
let retirementAge = getRetirementAge();
let currentYear = getCurrentYear();
let yearSpan = yearsLeft(currentAge, retirementAge);

function displayAnswer() {
  prompt(`It's ${currentYear}. You will retire in ${currentYear + yearSpan}`);
  prompt(`You have only ${yearSpan} years of work to go!`);
}

displayAnswer();