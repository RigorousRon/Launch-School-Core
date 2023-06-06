// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// Invoking `myFunction(b)` will log `2` to the console because when declaring the function `myFunction()`, even though the parameter variable was given the name `a`, this is not the same variable as the previously declared `a` variable. When invoked, the variable `b` was passed to the function, therefore, `2` was logged to the console.