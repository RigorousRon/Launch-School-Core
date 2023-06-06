// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// Hello and undefined. qux gets initialized to undefined without an explicit argument in the invocation