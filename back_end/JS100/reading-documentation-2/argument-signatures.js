// How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?
let array = ['1', '2', '3'];

console.log(array.join()); // 1,2,3
console.log(array.join('')); // 123
console.log(array.join('-')); // 1-2-3
console.log(array.join('', '-')); // 123