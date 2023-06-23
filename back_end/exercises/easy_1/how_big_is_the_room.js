//Build a program that asks the user to enter the length and width of a room in
//meters, and then logs the area of the room to the console in both square
//meters and square feet.
//Note: 1 square meter == 10.7639 square feet
//Example:
/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

const readline = require('readline-sync');
const SQMETERS_SQFEET_CONSTANT = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUnits() {
  prompt('Please enter the desired units, meters or feet:');
  let units = readline.prompt();

  return units;
}

function getLength() {
  prompt('Please enter the width of the room:');
  let length = readline.prompt();

  return parseInt(length, 10);
}

function getWidth() {
  prompt('Please enter the length of the room:');
  let width = readline.prompt();

  return parseInt(width, 10);
}

let units = getUnits();
let length = getLength();
let width = getWidth();

function getArea(length, width) {
  let area = length * width;

  return area;
}


let area = getArea(length, width);

function convertMetersToFeet(areaInMeters) {
  return areaInMeters * SQMETERS_SQFEET_CONSTANT;
}

function convertFeetToMeters(areaInFeet) {
  return areaInFeet / SQMETERS_SQFEET_CONSTANT;
}

function conversion(area, units) {
  if (units === 'meters') {
    let convertedArea = convertMetersToFeet(area);
    return convertedArea;
  } else if (units === 'feet') {
    let convertedArea = convertFeetToMeters(area);
    return convertedArea;
  }

  return null;
}

let convertedArea = conversion(area, units);

function displayArea(units) {
  if (units === 'meters') {
    prompt(`Your area is ${area.toFixed(2)} square meters`);
    prompt(`(${convertedArea.toFixed(2)} square feet)`);
  } else if (units === 'feet') {
    prompt(`Your area is ${area.toFixed(2)} square feet`);
    prompt(`(${convertedArea.toFixed(2)} square meters)`);
  }
}

displayArea(units);