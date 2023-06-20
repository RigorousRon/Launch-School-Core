//What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//false, is Number.isNaN to compare to NaN
//Number.isNaN(nanArray[0]);