/*
Explain why this code logs '510' instead of 15.

Copy Code
console.log('5' + 10);
*/

console.log('5' + 10);
/* This logs '510' instead of 15 because the first operand is a string so it is performing string concatenation. 10 gets coerced to a string */