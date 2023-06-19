let string = "The Flintstones Rock!";

for (let index = 1; index <= 10; index += 1) {
  console.log(string.padStart((string.length + index), ' '));
}

// for (let padding = 1; padding <= 10; padding += 1) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }