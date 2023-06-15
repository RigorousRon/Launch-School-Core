//Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

//Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

//No error, will create the index at 6 with a value of 5.
//Empty slots will be in between, e.g. numbers[4]
//numbers[4] returns undefined, but does not have it
//distinction between empty vs undefined
//numbers.map() => 10 returns values for undefined, not empty