//Write a function that takes two strings as arguments, determines the length
//of the two strings, and then returns the result of concatenating the shorter
//string, the longer string, and the shorter string once again. You may assume
//that the strings are of different lengths.

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1.concat(string2).concat(string1);
  } else if (string2.length < string1.length) {
    return string2.concat(string1).concat(string2);
  }

  return null;
}

console.log(shortLongShort('', 'fgh'));
console.log(shortLongShort('abcde', 'fgh'));