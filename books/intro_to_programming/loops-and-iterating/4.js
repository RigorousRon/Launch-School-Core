// Does the following code produce an error? Why or why not? What output does this code send to the console?
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
// no error, i is incremented on line 2, all 3 components of the for loop are optional, prints 1-5, can also initialize i before the loop to change the scope if wanted