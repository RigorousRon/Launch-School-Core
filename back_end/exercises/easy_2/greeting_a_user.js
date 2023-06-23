//Write a program that will ask for a user's name. The program will then greet
//the user. If the user writes "name!" then the computer yells back to the user.

/*
Examples:

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getName() {
  prompt("What is your name?");
  let name = readline.question();

  return name;
}

let name = getName();

function greetUser(name) {
  if (name.charAt(name.length - 1) === '!') {
    name = name.slice(0, -1);
    prompt(`HELLO ${name}. WHY ARE WE SCREAMING?`);
  } else {
    prompt(`Hello ${name}.`);
  }
}

greetUser(name);