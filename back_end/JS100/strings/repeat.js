// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(number, string) {
  let newString = '';

  while (number > 0) {
    newString += string;
    number -= 1;
  }
  
  return newString;
}


console.log(repeat(3, 'ha')); // 'hahaha'

