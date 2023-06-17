//Starting with the string:

let famousWords = "seven years ago...";

//Show two different ways to put the expected "Four score and" in front of it
let otherWords = "Four score and ";
let a = otherWords.length;
let b = famousWords.length;

let newStr1 = famousWords.padStart(a + b, otherWords);
console.log(newStr1);

let newStr2 = otherWords.concat('', famousWords);
console.log(newStr2);

//or, simply:
console.log(otherWords + famousWords);