//Write a function that takes one argument, a positive integer, and returns a
//string of alternating 1s and 0s always starting with a 1. the length of the
//string should match the given integer.

/*
Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/

function stringy (integer) {
  let one = '1';
  let zero = '0';
  let string = '';

  for (let index = 1; index <= integer; index += 1) {
    if (index % 2 !== 0) {
      string += one;
    } else {
      string += zero;
    }
  }

  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"