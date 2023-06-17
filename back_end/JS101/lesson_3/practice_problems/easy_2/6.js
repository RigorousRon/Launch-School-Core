//Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//This code will create a nested array that looks like this:
let array = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//Nesting data structures like we do here is commonplace in JS and programming
//in general. we'll explore this in much greater depth in a future lesson.

//Create a new array that contains all of the above values, but in an un=nested
//format:
//[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let newArray = [];
newArray = newArray.concat(array[0], array[1], array[2], array[3]);
console.log(newArray);

console.log([].concat(...flintstones));

// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);

// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });

// let newFlintstones = flintstones.flat();