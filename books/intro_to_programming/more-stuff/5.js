// What does the following code do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// converts string into array of words, reverses the order, then returns a new array that contains the length of the words
