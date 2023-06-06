// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// Logging a to the console shows that the firstName property has changed to Jane. Even though the object was declared with const, that just means it is not allowed to point to a new value in memory. In this case, the object of a can still be mutated while still pointing to the same value in memory.