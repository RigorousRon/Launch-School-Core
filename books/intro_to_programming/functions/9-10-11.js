/* 9
Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).
*/
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number');
let right = getNumber('Enter the second number');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/* 9
multiply, left, right, product, getNumber, prompt, left, right

parseFloat and question: parseFloat is an actual built-in function in JavaScript; we are pretending that question also is a built-in function. As such, we know that both parseFloat and question are variable names.

console: is the variable name for the built-in Console object
*/

/* 10 Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

multiply = global
first left and right are local
product is local
getNumber is global
prompt is local
parseFloat and question are used locally but are global
this left and right are global
console is global

*/

/* 11 Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

No they are not. The first left and right are local, the next are global

*/