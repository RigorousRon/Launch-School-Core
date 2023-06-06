/*
Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6
*/

let num = 4936;

let ones = num % 10;
num = (num - ones) / 10;

let tens = num % 10;
num = (num - tens) / 10;

let hundreds = num % 10;

let thousands = (num - hundreds) / 10;
console.log(thousands);