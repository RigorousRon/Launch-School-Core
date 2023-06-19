//Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

//Return a new string that swaps the case of all the letters:

let newStr = munstersDescription.slice(0, 1).toLowerCase() +
munstersDescription.slice(1, munstersDescription.length).toUpperCase();

console.log(newStr);

// console.log(munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));