// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*
We are creating a new variable `a` inside the conditional block and since `a` is declared by `let`, this will throw a reference error because variables declared by `let` aren't available until the code runs. The program is looking for where the declared `a` inside of that block is. If `a`'s value was set before the console logs in the conditional blocks, the output would be:
```
2
2
```
Further, if we took out the second declaration entirely from the function, the console logs would output:
```
1
1
```
because the inner block scope still has access to the outer scoped `a` variable.
*/