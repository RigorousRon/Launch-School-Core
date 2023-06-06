function evenOrOdd (num) {
  if ((Number.isInteger(num)) && ((num % 2) === 0)) {
    console.log('even');
  } else if (Number.isInteger(num)){
    console.log('odd');
  } else {
    console.log('error')
    return;
  }
}

// can refactor to make more DRY, add the integer check as a separate if statement at top of function and then return if not an integer