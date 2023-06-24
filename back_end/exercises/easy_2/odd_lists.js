//Write a function that returns an Array that contains every other element of an
//array that is passed in as an argument. The values in the returned list should
//be those values that are in the 1st, 3rd, 5th, and so on elements of the
//argument array.

/*
Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/

function oddities(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 2) {
    newArray.push(array[index]);
  }

  return newArray;
}

function oddities2(array) {
  return array.filter((_, index) => index % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(oddities2([2, 3, 4, 5, 6]));