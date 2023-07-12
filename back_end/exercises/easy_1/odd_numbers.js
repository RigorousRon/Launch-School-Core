//Log all odd numbers from 1 to 99, inclusive, to the console, with each number
//on a separate line

for (let index = 1; index < 100; index += 1) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

/*
Explanation

first pass:
On line 4, a `for` loop is declared with a index parameter initialized to the
value of `1`, a condition to check whether the loop should be evaluated or not
which is checking whether the current index value is less than the number `100`
during the current loop iteration, and the index value is always equal to itself
plus `1` at the end of every loop iteration. Inside the loop on line 5 we have
an `if` statement, taking the remainder of whatever the index is of the current
iteration divided by `2`. This gives us the information of if there is a
remainder of 0 from this operation, than the current index is even, and if
there is a remainder of `1` from this operation, that means the index is odd.
This operation is checked with the strict inequality operator `!==`, thus thus
trying to determine if the current index is odd. Inside the `if` statement on
line 6, there is a `console.log` statement witch accepts the current `index`
value as an argument, thus printing all the odd numbers from the first index
value of `1`, all the way up to `99`, to the console.
*/