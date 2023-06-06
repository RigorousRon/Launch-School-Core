// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// Invoking `myFunction();` logs `1` to the console because the inside of the function has access to the outer scoped variable `a`.