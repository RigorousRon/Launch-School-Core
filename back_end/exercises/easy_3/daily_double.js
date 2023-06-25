//Write a function that takes a string argument and returns a new string that
//contains the value of the original string with all consecutive duplicate
//characters collapsed into a single character.

/*
Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

function crunch(string) {
  let newString = '';

  if (string.length <= 1) {
    return string;
  } else {
    let previousValue = newString[0];
    for (let index = 1; index < string.length; index += 1) {
      if (previousValue !== string[index]) {
        newString += string[index];
        previousValue = string[index];
      }
    }

    return newString;
  }
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""