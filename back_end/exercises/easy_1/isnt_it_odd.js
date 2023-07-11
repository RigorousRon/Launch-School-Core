//Write a function that takes on integer argument, which may be positive,
//negative, or zero. This method returns true if the number's absolute value is
//odd. You may assume that the argument is a valid integer value.

function isOdd(number) {
  return (Math.abs(number) % 2) !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


/*
Explanation:

first pass:
On line 5, a function is declared and initialized with the name of `isOdd.` This
function has one local variable parameter named `number`. When invoked, this
function returns the result of an expression that performs some math on the
argument that was passed into the function, which in this case we expect to be
a natural number due to the previously given problem statement. On line 6,
Firstly, using the `abs` method from the `Math` object takes the absolute value
of the `number` argument that was passed in. Next, the result of the previous
action is used with the remainder operator on the number 2, determining
whether or not there is a remainder when the number is divided by 2, which tells
us whether the number is even if the remainder is equal to 0, and odd if the
remainder is equal to 1. We then compare that result with 0, using the strict
inequality operator, to determine whether the number is odd, due to the fact
that we are comparing if the remainder is not equal to 0, which again means that
the number is indeed odd. This function is simply determining whether a given
natural integer number is odd or not.
*/