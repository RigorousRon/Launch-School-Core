/*
Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'
*/

function first(array) {
  return array[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // 'undefined'