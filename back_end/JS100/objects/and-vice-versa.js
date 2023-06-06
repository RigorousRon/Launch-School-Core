/*
Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


let keys = [];
let values = [];


nestedArray.map(entry => keys.push(entry[0]));
nestedArray.map(entry => values.push(entry[1]));

function convertToObj(arr1, arr2) {
  let object = {};

  arr1.forEach((k, v) => { object[k] = arr2[v] })
  return object;
}

console.log(convertToObj(keys, values));