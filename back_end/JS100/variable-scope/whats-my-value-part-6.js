// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// The second b variable is scoped only to the conditional block, so the original b variable never changes, and false is logged to the console.