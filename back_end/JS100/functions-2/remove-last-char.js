/*
Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

let string1 = 'ciao!';
let string2 = 'hello';

function removeLastChar(string) {
  let lastChar = string.charAt(string.length - 1);
  return string.replace(lastChar, '');
}

console.log(removeLastChar(string1));
console.log(removeLastChar(string2));