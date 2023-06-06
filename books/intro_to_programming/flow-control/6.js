// What does this code output to the console?
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// it logs 'Not Empty' because an empty array (or object) is truthy