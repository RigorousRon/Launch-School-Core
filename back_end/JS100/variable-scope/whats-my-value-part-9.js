// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// Since we are trying to assign a new value to the variable a declared by const, we will get a TypeError.