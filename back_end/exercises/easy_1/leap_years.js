//In the modern era under the Gregorian Calendar, leap years occur in every year
//that is evenly divisible by 4, unless the year is also divisible by 100. If
//the year is evenly divisible by 100, then it is not a leap year, unless the
//year is also evenly divisible by 400.

//Assume this rule is valid for any year greater than year 0. Write a function
//that takes any year greater than 0 as input and returns true if the year is a
//leap year, of false if it is not a leap year.

/*
Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
*/

function isLeapYear(year) {
  if (year >= 1752) {
    return (year % 400 === 0) ||
           ((year % 4 === 0) && (year % 100 !== 0));
  } else {
    return (year % 4 === 0);
  }
}

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// }

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

/*
Explanation:

first pass:
On line 1, the function is declared with a name of `isLeapYear` and takes one
parameter named `year`. On lines 2 and 5 respectively, there is an `if` and an
`else` statement comparing the data passed in from the `year`parameter. The
conditional check for the first `if` statement is using the less than or equal
to operator to determine whether the given value for `year is less than or equal
to the number `1752`. If this is true, it returns the result of another
conditional found on lines 3 and 4. The conditional contains an OR `(||)`
operator with one expression on the left side and 2 expressions in parentheses
on the right side, which are also both AND'ed together `(&&)`. The left
expression is checking whether the `year` local variable has a remainder when
divided by `400`. The right expression is checking whether the local variable
`year` has a remainder when divided by `4` and does NOT have a remainder when
`year` is divided by 100. If the left or right expression is true, the boolean
value `true` is returned from the function. In the else statement on line 5,
for all other cases, the function will return `true` when the `(year % 4 === 0)`
returns true, which is determining whether there is a remainder when the `year`
variable divided by `4`. This function is determining if an input number of
`year` is a leap year or not.
*/