// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// the condition is always reassigning counter to 1, which is truthy, so the condition is always true and always resetting counter to 1 which is not greater than 2 so the break statement never occurs