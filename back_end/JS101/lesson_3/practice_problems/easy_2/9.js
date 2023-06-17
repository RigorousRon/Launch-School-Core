//Back in the stone age (before CSS), we used spaces to align things on the
//screen. If we have 40-character wide table of Flintstone family members, how
//can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
let tableSize = 40;

console.log('........................................');
console.log(title.padStart(Math.floor(((tableSize - title.length) / 2) +
title.length), ' '));