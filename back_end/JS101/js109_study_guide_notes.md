Naming conventions: legal vs. idiomatic, illegal vs non-idiomatic
  First pass:
  ??

  Second summary after notes:
  idiomatic is camel case, pascal case for constructors, no dots or hyphens,
  acronyms with caps, screaming snake for config/constants, local styling. 
  DEPENDS ON WHAT WE ARE DESCRIBING
  legal means it is technically allowed, but not idiomatic. 

  From Notes:
  Idiomatic:
    Non-constant variables and object properties
      employee
      number
      fizzBuzz
      destinationURL
      m00n
    Constructor functions and classes
      Cat
      BoxTurtle
      FlightlessBird
    Other functions
      parseURL - URL is an acronym
      goFaster
    Configuration and magic constants
      ABSOLUTE_PATH
    Other const names
      employeeOfMonth - local style
      HairyCat - local style
      ABSOLUTE_PATH - local style
  
  Valid but non-idiomatic:
    Universally non-idiomatic:
      $number - begins with $
      fizz_buzz - snake case not allowed
      fizzBUZZ - buzz is not an acronym
      _hello - begins with _
      goodbye_ ends with _
      milesperhour - undifferentiated words
      MILESPERHOUR - undifferentiated words
    Non-constant variables and object properties
      Employee - begins with a capital letter
      fizzBUZZ - buzz is not an acronym
      FIZZ_BUZZ - screaming snake case
    Constructor functions and classes
      cat - begins with lowercase letter
      makeTurtle - begins with lowercase letter
      FIZZ_BUZZ - screaming snake case
    Other functions
      ParseURL - begins with capital letter
      FIZZ_BUZZ - screaming snake case
    Configuration and magic constants
      absolutePath - not screaming snake case
      Today - not screaming snake case

    non idiomatic names are commonly used by external libraries so they are easy
    to type but don't conflict with names in other libraries

  Invalid names
      42ndStreet - begins with number
      fizz-buzz - hyphen not allowed
      fizz.buzz - looks like property reference

Primitive values vs objects
  First pass:
  Primitive values are values such as numbers, strings, booleans, null,
  undefined, bigInt, and symbol. These values can be assigned to variables. 
  Primitive values are immutable which means their value can not be changed, 
  only replaced by a different reference to another value in memory.

  Objects are more complex than primitive values. Objects contain a group of
  information. They contain value pairs, a property and a value, which could 
  also contain more primitives or objects. Arrays are also objects. They are an 
  ordered list of primitive values or objects. Objects are mutable which means 
  that the same value that was being pointed to in memory that references the
  object can be changed.

  From notes:
  every value is either a primitive or an object. primitives are ATOMIC values.
  Objects are COMPOUND values made up of primitives or other objects. Primitives
  are immutable - can add to/remove/change them. Any operation on a primitive
  returns a new primitive. Objects are mutable. Certain operations can change
  the object in place. All variables that have a reference to that object will
  see that change.

Type coercions: explicit and implicit
  First pass:
    Explicit type coercion is when we are asking the code to manipulate the type 
    of a primitive value e.g. a string to number or number to string:
      Number('4');
      4.toString();
      parseInt('4');
      parseFloat('12.52');
      +'1';
    
    Implicit type coercion happens in certain situations such as value comparisons
    and Javascript will try to change a value type if you happen to be comparing
    two different value types e.g. a number to a string, therefor trying to 
    account for human error.
  
  From notes:
    Explicit type coercion happens when the programmer intentionally uses one of
    the many built-in functions and operators to coerce one type of value to
    another.

    Implicit type coercion happens when you perform an operation involving values
    of different types and JS coerces the values to have the same types; type
    varies based on the specific combination of types involved in the expression.

Numbers, NaN and Infinity
  First pass:
    Numbers are mathematical values in JS. Integers, floating point, bigInt, and
    there is a maximum amount JS can handle depending on the situation. Numbers
    are a primitive value.

    NaN is a property of the global object and it has a type of number. NaN 
    is returned when there is a mathematical operation that is returning 
    something that is not a number

    Infinity is how we represent infinity in JS. Also we have -Infinity. ???

    From notes:
      Numbers are represented in JS by one data type, Number. (real numbers)

      NaN is a special value that signals an illegal operation on numbers, such
      as 0 / 0

      Infinity is practically similar to NaN, but conceptually different. 
      Infinity is a number so large it cant be written down. 

Strings
  First pass:
    Strings are a collection of textual data, denoted by being between "" or ''.
    Strings are a primitive value.

  From notes:
    Strings are a list of characters in a specific sequence. 

Template Literals
  First pass:
    Template literal are similar to strings. They are denoted by back ticks and
    they represent textual data as well, but they can also use string
    interpolation with: ${} around a variable, which allows access to dynamic
    variables in textual form.
  
  From notes:
    INTERPOLATES the EXPRESSIONS value

Boolean vs truthiness
  First pass:
    Boolean is simply the values true and false. Truthiness is a pseudo-boolean
    representation of a value. Values that could be argued as "having a value"
    are considered truthy and values that could be argued as being "empty in
    value" are considered falsy. 
      falsy values: false, 0, '', null, undefined, NaN
      rest are truthy
  
  From notes:
    JS can coerce any value to a boolean value, and thats what it does in 
    conditional contexts like the if statement. 

Undefined and null
  First pass:
    Undefined and null both represent emptiness, or nothing. Undefined is used
    when there was no indication of an empty like value being needed and is
    failing to return a value, and null is used when we explicitly want to 
    represent nothingness as a value. 

  From notes:
    When a variable is not defined, its value is given by undefined. Undefined
    is the absence of a value. Null is the intentional absence of a value. Must
    use null explicitly, undefined can arrive implicitly.

Array and object syntax
  First pass:
    Arrays use brackets for grouping their ordered list, and commas to separate.
    Can break up elements by line, be consistent with comma separator at the end
    Elements Can be accessed by their index with brackets: array[0]

    Objects use curly braces for grouping their key value pairs (unordered). 
    Properties can be accessed either with dot notation or indexing. Keys have
    colons after them as well.

  From notes:
    essentially all good???

Array properties and methods: array.length, array.push, array.pop, array.reverse
  First pass:
    length returns the length of the array, push adds a value to the end
    of an array, pop takes a value off the end of an array, and reverse reverses
    the order of the array

  From notes:
    all good??? probably more methods...

Object methods: Object.keys
  First pass:
    Object.keys returns the keys of the object as an array

  From notes:
    all good??? probably more methods...
    
Operators
  numeric operators: +, -, *, /, %
    + is addition, - is subtraction, * is multiplication, / is division,
    % is modulo/remainder
  
  string operators: +
    + performs concatenation on strings, e.g. combining them together

  conditional operators: ===, !==, <, >, <=, >=, ==, !=, ternary
    === is strict equality, returns true type and value have to match
    !== is strict inequality, returns false type and value have to match
    < less than, returns true if first value is less than second value
    > greater than, returns true if first value is greater than second value
    <= less than or equal, same as less than but inclusive of second value
    >= greater than or equal, same as greater than but inclusive of second value
    == non strict equality, returns true if equal, coerces types!
    != non strict inequality, returns false if equal, coerces types!
    ternary, (? :), checks a condition with 2 outcomes; if else statement
      condition ? execute if true : execute if false;
  
  loose and strict equality
    loose is == and != and they will coerce types, strict is === and !== and
    will not coerce types
  
  logical operators and short-circuit evaluation: !, &&, ||
    ! - logical not, negates is operand
    && - returns true when both operands are true, false if either is false
    || - returns true when either or both operands are true, false if both false

    short circuit evaluation is when the logical operator can finish its 
    calculation by already knowing the value of the first operand e.g. if the
    first operand in an && operation is false then it doesn't matter what the 
    second operand is, same thing with getting the first operand to be true in
    an || statement, then it will short circuit and evaluate to true

  typeof operator
    gets the data type of a value

  operator precedence
    order of operations for which operators get evaluated
      high to low:
      comparison
      equality
      logical AND
      logical OR
  
  From notes:
    more detail??? pretty clear

Mutability, immutability, and const
  First pass:
    Mutability is when a value can be changed. Data types, such as arrays and
    objects, which are passed by reference, can be changed and are therefore
    mutable.

    Immutability is when an atomic value can not be changed. This happens for
    primitive types, such as string, boolean, null, undefined, number. These
    are passed by reference.

    Const is a key word that declares a variable that is not supposed to change

  From notes:
    Operation on a primitive value returns a new primitive value

    certain operations on objects can change the object in place. all variables
    with reference to that object will see that change

variables
First pass:
  identifier: variable names, constant names, function names, property names
    not sure what this is asking???

  variable and constant declarations
    variables are defined with let and const. let is a variable that can change
    and const is a variable that cannot change
  
  initialization, assignment, and reassignment
    initialization is the creation of the space for a variable to hold a value
    in memory, assignment is assigning that space a value, and reassignment is
    changing that value
  
  scope
    the area of code in which variables can be accessed, e.g. local, global, 
    block

  variables as pointers
    JS uses pointers for non primitive values, like arrays and other objects
    variable address points to the objects address which points to the object
    value
  
  variable shadowing
    when the function scoped variable has the same name as the outer scoped 
    variable. can have some side effects. prevents access to the outer scoped
    variable
  
  From notes:
    sure will have some from sessions...

Conditionals and loops
  First pass:
    conditionals are expressions a loop checks itself for in order to run and
    a loop is a block of code that does a repeated action for a specified 
    condition

  From notes:
    Code that runs over and over until some ending condition occurs. Most
    programming languages use loops to provide this capability. 

    A conditional is a fork in the road. Data arrives at a conditional which
    then tells the data where to go. Simplest form uses if statements and
    logical operators. 

console.log
  First pass:
    console.log is a built in JS method that outputs some data that was passed
    to it to the terminal.

  From notes:
    returns undefined. log is a synonym for printing or displaying to the
    console

readline-sync and the question method
  First pass:
    readline sync is a node library that has some useful methods that help
    abstract away some more difficult tasks, such as the question method

    The question method will ask the user for some textual input from the 
    console and will return the value of what was input
  
  From notes:
    readline is an api that lets JS programs read input from the command line.
    However, readline is not straight forward and requires an understanding of
    asynchronous programming and higher order functions. readline-sync is a 
    simplified library from readline that we can use.

    the question method displays its string argument, then waits for the user to
    respond. when the user types some text and presses return, it returns that
    text to the program. we can assign that text to a variable

require
  first pass:
    ?? require is a key word that includes a library into a project?

  From notes: 
    require is a built in function from node that imports a library to a file.
    it returns the library as an object.

functions
  functions vs methods
    first pass:
      functions are blocks of code that perform an action when called and
      methods are functions that exist on an object. not all functions are 
      methods but all methods are functions

    from notes:
      methods are functions that need a value that you can use to call the 
      function. e.g. 'xyz'.toUpperCase();
      two types: instance methods and static methods
      instance methods have prototype in their name. no easy way to remember

      functions let you extract code and use it as a separate unit. 
      define with the function keyword - function declaration, expression, arrow
      uses parentheses after the function name and curly braces for the function
      body

  declarations, expressions, arrow functions
    first pass:
      declarations are functions defined with the keyword function

      function expressions are functions set to a variable

      arrow functions are newer more condensed syntax that i believe also 
      provide benefit for using the 'this' keyword
    
    from notes:
      with function declarations you can call the function before you declare it
      THESE ARE HOISTED
      useful when you want to define a named function that can be accessed and
      called from anywhere in the scope. commonly used for defining reusable
      functions or functions that need to be referenced by name
      function functionName() {}

      function expressions are when you assign a function to a variable, and you
      cannot invoke a function expression before it appears in your program. we
      can do this because JS functions are first class functions, which means
      you can treat them like any value. All JS functions are objects. any 
      function that doesnt have the function keyword is a function expression.
      even wrapping a function declaration in parentheses creates a function
      expression.
      NOT HOISTED
      let functionName = function() {} or const functionName = function() {}
      useful when you wany to define a function as part of an expression, such
      as assigning it to a variable or passing it as an argument to another
      function. They provide more flexibility and can be used to create 
      anonymous functions or functions that are scoped to a specific variable.


      arrow functions are similar to function expressions but use a different
      syntax. more differences than just syntax though. arrow functions also
      have implicit returns WHEN THE FUNCTION BODY CONTAINS A SINGLE EXPRESSION
      THAT IS NOT ITSELF SURROUNDED BY CURLY BRACES (EXPRESSION MAY HAV SUB 
      EXPRESSIONS, BUT THE ENTIRE EXPRESSION MUST EVALUATE TO A SINGLE VALUE)
      NOT HOISTED JUST LIKE FUNCTION EXPRESSIONS
      const functionName = () => {}
      provide concise syntax and have lexical scoping of 'this'. useful when
      you need a shorter syntax for simple functions or when you want to 
      preserve the value of 'this' from the surrounding context.

  definition and invocation
    first pass:
      function definition is when a function is created, either by function
      declaration, expression, or arrow function. invocation is when the
      function is called to do something, by using parentheses following the 
      function name
    
    from notes:
      ???
  
  default parameters
    first pass:
      default parameters are default values that can be set for the local 
      variables that are being passed into the function if values are not
      provided when the function is invoked.

    default parameters let us call optionally call functions without arguments

  return values
    first pass:
      function take in data and they give back data after performing some action
      return values are the values that are given back from the function after
      some action
    
    from notes:
      also return values from expressions
  
  parameters vs arguments
    first pass:
      parameters are like placeholders for local variables inside functions.
      arguments are the actual values that are passed into the function.
    
    from notes:
      straightforward
  
  function, block, local, and global scope
    first pass:
      function scope and block scope is the scope inside the curly braces of
      functions and blocks. they have their own local scope and can also access
      global variables outside of the local scope, but not vice versa.

    from notes:
      global variables are available everywhere. any variable declared inside a
      function or block is local scope, and can't be accessed outside the 
      function that declares them.

  nested functions
    first pass:
      can create functions anywhere even within other functions. 

    from notes:
      nested function get created and destroyed each time the outer function
      runs. They are also private functions since we can't access a nested 
      function from outside the function where it is defined. 

  function composition
    first pass:
      using a function call as an argument to another function

    from notes:
      simple enough??
  
  output vs return values vs side effects
    first pass:
      output is displaying something to the console vs return values are the
      values being brought back from a function after a function has done some
      operation on the values. a function has side effects when it does both
      of those things, or mutates a value (more side effects???)
    
    from notes:
      ???
  
  pass by reference vs pass by value
    first pass:
      pass by value is typically when a primitive value is being sent into
      or out of a function, and it is immutable. pass by reference is when an 
      object is sent into or out of a function and is mutable, which could
      change values in unexpected ways
    
    from notes:
      when an operation within the function mutates its argument, it affects
      the original argument
  
  first class functions
    first pass:
      can treat functions as values: assign them to variables, pass them as
      arguments, and return them from a function call

    from notes:
      same
  
  call stack
    first pass:
      call stack is the execution order for a program. a sequential list of the
      order in which the program executes.

    from notes:
      helps JS keep track of what function is executing as well as where 
      execution should resume when the function returns. works like a stack of
      books. 
  
expressions and statements
  first pass:
    ???

  from notes:
    A statement is a piece of code that performs an action. It is executed 
    for its side effects, such as modifying variables, control flow, or 
    function invocation.
    Statements are typically used to control the program's behavior and 
    structure, like loops (for, while), conditionals (if, switch), function 
    declarations, and variable assignments.
    Examples of statements: variable assignment, conditional, loop

    An expression is a piece of code that produces a value. It can be a 
    combination of variables, literals, operators, and function invocations 
    that evaluates to a single value.
    Expressions can be used in statements, as part of assignments, or to 
    produce a value that is used elsewhere in the code.
    Examples of expressions: addition, function invocation, ternary

exceptions: throwing and catching
  first pass:
    throwing an error is the same as raising an error. we have errors such as
    type, syntanx. raising an exception is throwing an error. can implement
    guard clauses, or use try/catch/finally statments.
  
  from notes:
    ???

common Math methods: floor, random, pow
  first pass:
    floor rounds down a number, random picks a random number, and pow returns
    the value of a base raised to a power

  from notes:
    more???

discuss functions use and purpose ('user level') instead of its implementation  






















