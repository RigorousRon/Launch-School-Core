// Create an array from the keys of the obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray = Object.keys(obj);

let keysUpper = keyArray.map(function(value){
  return value.toUpperCase();
});

console.log(keysUpper);
console.log(obj);