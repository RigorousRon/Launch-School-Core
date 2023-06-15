//Using the following string, create a new string that contains all lowercase
//letters except for the first character, which should be capitalized

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function capitalizeFirst(str) {
  let firstChar = str.slice(0, 1).toUpperCase();
  let remainingString = str.slice(1).toLowerCase();
  let newString = firstChar + remainingString;
  console.log(newString);
}

capitalizeFirst(munstersDescription);

//Launch school alt:
let newStr = munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase();

console.log(newStr);