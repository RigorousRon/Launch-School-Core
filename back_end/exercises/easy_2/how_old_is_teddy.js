//Build a program that randomly generates Teddy's age, and logs it to the
//console. Have the age be a random number between 20 and 120 (inclusive).

/*
Example output:

Teddy is 69 years old!
*/

let teddysAge = Math.floor(20 + (Math.random() * 101));

console.log(`Teddy is ${teddysAge} years old!`);

//Be aware doing things in your head!

/*
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

more robust? check if user incorrectly enters order of min/max?
check if one is greater than the other and reverse the order
*/