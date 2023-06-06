/*
What does this code log to the console? Does executing the foo function affect the output? Why or why not?
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
Logs 1. executing foo does not affect output because the bar variable in the function scope is a different variable than the bar in the global scope 
*/