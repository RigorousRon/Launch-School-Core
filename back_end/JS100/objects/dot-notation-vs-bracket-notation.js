/*
Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean);

Snippet 2:

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean);
*/

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); 

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); 

// Dot notation does not accept variables and thus makes a 'prefix' property with value 'Indian' in the first snippet, and uses the variable in the bracket notation in the second snippet to add a property of 'Indian' with value 'Pacific'.