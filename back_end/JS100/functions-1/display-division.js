/*
Determine the output that the following code will log to the console.
*/

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

// Nothing, because the function was not invoked. If it was invoked, it would log the math of the multiples of 3
