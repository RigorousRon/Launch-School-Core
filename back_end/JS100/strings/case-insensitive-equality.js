/*
Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?
*/

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function caseInsensitiveEquality(string1, string2) {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(caseInsensitiveEquality(string1, string2));