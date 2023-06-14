const readline = require('readline-sync');
const PERCENT_CONVERTER = 100;
const MONTHS_IN_YEAR = 12;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(num) {
  const isEmpty = num.trim() === '';
  const isNegative = Number(num) < 0;
  const isNotANumber = Number.isNaN(Number(num));

  return isEmpty || isNegative || isNotANumber;
}

function isZero(num) {
  return Number(num) === 0;
}

function welcome() {
  console.clear();
  prompt("Welcome to the Mortgage Calculator!");
}

function getLoanAmount() {
  prompt("Please enter the loan amount:");
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount) || isZero(loanAmount)) {
    prompt("Please enter a valid, positive, non-zero number:");
    loanAmount = readline.question();
  }

  return Number(loanAmount);
}

function getLoanRate() {
  prompt("Please enter the Annual Percentage Rate (%):");
  prompt("(Example: 10.5 = 10.5%)");
  let annualPercentageRate = readline.question();

  while (isInvalidNumber(annualPercentageRate)) {
    prompt("Please enter a valid, positive number:");
    annualPercentageRate = readline.question();
  }

  return Number(annualPercentageRate);
}

function getMonths() {
  prompt("Please enter the loan duration in months:");
  let loanDurationMonths = readline.question();

  while (isInvalidNumber(loanDurationMonths) || isZero(loanDurationMonths)) {
    prompt("Please enter a valid, positive, non-zero number:");
    loanDurationMonths = readline.question();
  }

  return Number(loanDurationMonths);
}

function calculateMonthlyPayment(loanAmount, interestRate, loanDuration) {
  if (interestRate === 0) {
    return loanAmount / loanDuration;
  } else {
    return loanAmount * (interestRate /
    (1 - Math.pow((1 + interestRate), (-loanDuration))));
  }
}

function getMonthlyInterestRate(annualPercentageRate) {
  return (Number(annualPercentageRate) / PERCENT_CONVERTER / MONTHS_IN_YEAR);
}

function chooseRedo(choice) {
  while (!['yes', 'no'].includes(choice.toLowerCase())) {
    prompt('Please enter "yes" or "no"');
    choice = readline.question();
  }
}

function redoChoice() {
  prompt('Would you like another calculation? Type "yes" or "no"');
  let choice = readline.question();

  chooseRedo(choice);

  if (choice.toLowerCase() === 'yes') {
    runCalculator();
  } else {
    prompt('Thank you for using the calculator!');
  }
}

function runCalculator() {
  welcome();

  let loanAmount = getLoanAmount();
  let loanRate = getLoanRate();
  let monthlyInterestRate = getMonthlyInterestRate(loanRate);
  let loanDurationMonths = getMonths();
  let monthlyPayment = calculateMonthlyPayment(loanAmount,
    monthlyInterestRate, loanDurationMonths);

  prompt(`Your payment per month is : $${monthlyPayment.toFixed(2)}`);

  redoChoice();
}

runCalculator();
