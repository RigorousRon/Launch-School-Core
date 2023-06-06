// Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

/* n!	Expansion	Result
1!	1	1
2!	1 * 2	2
3!	1 * 2 * 3	6
4!	1 * 2 * 3 * 4	24
5!	1 * 2 * 3 * 4 * 5	120
You may assume that the argument is always a positive integer. */

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(8));


function factorialRecursive(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorialRecursive(number - 1);
}