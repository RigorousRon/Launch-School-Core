const readline = require('readline-sync');
const PERCENT_CONVERTER = 100;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getBillAmount() {
  prompt("What is the bill?");
  let billAmount = parseFloat(readline.prompt());

  return billAmount;
}

function getTipRate() {
  prompt("What is the tip percentage?");
  let tipPercentage = parseFloat(readline.prompt());

  return tipPercentage;
}

let billAmount = getBillAmount();
let tipRate = getTipRate();

function calculateTip (tipRate, billAmount) {
  return (tipRate / PERCENT_CONVERTER) * billAmount;
}

let tip = calculateTip(tipRate, billAmount);

function calculateTotal (tip, billAmount) {
  return tip + billAmount;
}

let total = calculateTotal(tip, billAmount);

function display (tip, total) {
  prompt(`The tip is $${tip.toFixed(2)}`);
  prompt(`The total is $${total.toFixed(2)}`);
}

display(tip, total);

