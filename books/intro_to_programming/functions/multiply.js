function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function getNumber (prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return parseFloat(number);
}

let firstNum = getNumber("What is your fist number to multiply? ");
let secondNum = getNumber("What is your second number to multiply? ");

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);