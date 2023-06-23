//Using the multiply() function from the "multiplying two numbers" problem,
//write a function that computes the square of its argument (the square is the
//result of multiplying a number by itself)/

/*
Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
*/

function multiply(num1, num2) {
  return num1 * num2;
}

function square(argument) {
  return multiply(argument, argument);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true