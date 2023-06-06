/* 
Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

*/

function isBlank(string) {
  return !string;
}

console.log(isBlank('mars')); 
console.log(isBlank('  '));   
console.log(isBlank(''));