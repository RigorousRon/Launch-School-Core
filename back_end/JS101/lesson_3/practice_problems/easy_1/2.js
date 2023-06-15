//How can you determine whether a given string ends with an exclamation mark?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


function determineExclamation(str) {
  let regex = /[!]$/gm;
  if (str.match(regex)) {
    console.log('Match!');
  } else {
    console.log('No Match');
  }
}
determineExclamation(str1);
determineExclamation(str2);

//Also a endsWith str method:

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));