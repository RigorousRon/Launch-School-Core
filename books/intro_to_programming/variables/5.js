// What does this log and why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// Since you declare and initialize a new foo inside the block to qux, once it exits the block it goes out of scope and prints bar to the console