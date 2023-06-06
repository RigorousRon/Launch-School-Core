/*
Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
*/

function isBlank(string) {
  let re = /\S/;
  return !string || !re.test(string);
}

console.log(isBlank('ma rs')); // false
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true