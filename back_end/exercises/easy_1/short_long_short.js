//Write a function that takes two strings as arguments, determines the length
//of the two strings, and then returns the result of concatenating the shorter
//string, the longer string, and the shorter string once again. You may assume
//that the strings are of different lengths.

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1.concat(string2).concat(string1);
  } else if (string2.length < string1.length) {
    return string2.concat(string1).concat(string2);
  }

  return null;
}

console.log(shortLongShort('', 'fgh'));
console.log(shortLongShort('abcde', 'fgh'));

/*
Explanation:

first pass:
On line 6, a function is declared and initialized with the name `shortLongShort`
and two parameters named `string1` and `string2`. On line 7, in the body of the
function, an `if` statement's conditional  is checking whether the length value
of the first input string argument `string1` is less than the second input
string argument `string2` using the `String` object method `.length`. If the
condition is true, we return the value from the expression inside the first
`if` block on line 8. This `return` statement is an expression containing method
chaining using the `concat` string method. In the first method call, the shorter
input string gets concatenated with the longer input string, then subsequently
concatenated with the shorter input string once again with another method call
of concat. For the next `else if` conditional on line 9, the expression is
checking whether the second input string length of `string2` is now shorter
than `string1`'s. If this condition evaluates to true, then the expression
from the `else if` block gets returned. This `return` statement accomplishes the
same functionality as the last, just flipping the order of which input string
argument is shorter, thus still returning shortLongShort as the function name
suggests. Since there is no `else` conditional a `return null` is also included
on line 13 to account for any unseen edge cases and eslint rules.
*/