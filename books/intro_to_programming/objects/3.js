// Use object literal sytanx (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. the object should contain at least 3 elements. you should place your code between the braces in the let statement.

let myArray = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};


for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
