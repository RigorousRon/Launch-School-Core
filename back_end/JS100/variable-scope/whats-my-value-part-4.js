// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// This logs 1 to the console. The block for the if statement can access the a variable because it was declared by let in the function above that block, and since the if condition will always be true, invoking myFunction() simply logs 1 to the console.