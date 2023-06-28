//Madlibs is a simple game where you create a story template with 'blanks' for
//word. You, or another player, then construct a list of words and place them
//into the story, creating an often silly or funny story as a result. Create a
//simple madlib program that prompts for a noun, a verb, an adverb, and an
//adjective, and injects them into a story that you create.

/*
Example:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

 console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter a noun:');
let noun = readline.prompt();
prompt('Enter a verb:');
let verb = readline.prompt();
prompt('Enter an adjective:');
let adjective = readline.prompt();
prompt('Enter an adverb:');
let adverb = readline.prompt();

console.log(`Let's go to the ${noun} for dinner. Once there, we can ${verb} what we want, tell them to make sure it is ${adjective} and hopefully they make it ${adverb}`);