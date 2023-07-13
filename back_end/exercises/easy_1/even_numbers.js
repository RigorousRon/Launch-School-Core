//Log all even numbers from 1 to 99, inclusive, to the console, with each number
//on a separate line.

for (let index = 1; index < 100; index += 1) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

/*
Explanation:

first pass:
On line 4, we declare a for loop with a loop variable `index` initialized to `1`
. The condition of if the loop variable `index` is less than `100` will
determine if the loop will continue to run. For each iteration of the loop, the
`index` variable will be incremented by `1`. On line 5, an `if` uses the
remainder operator `(%)` to check if the remainder of dividing the `index`
variable by `2` is equal to `0`. This determines whether the `index` variable in
the current iteration of the loop is even. On line 6, a call to the `log` method
on the `console` object (`console.log`) is used inside of the if block to print
out each even iteration of the `index` variable to the console, thus displaying
all even numbers up to 100 (non-inclusive).
*/