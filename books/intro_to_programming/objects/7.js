// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// Without running this code, can you determine whether these two snippets produce the same output? why?
// for .. in iterates over all objects keys, including prototypes. add a conditional with hasOwnProperty to fix