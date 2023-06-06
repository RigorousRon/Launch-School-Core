// Will th is throw an error? why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//No error, for same reasons as last exercise, 2 different foo's in memory, no reassigning of a constant here