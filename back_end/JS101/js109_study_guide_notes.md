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
    the area of codein which variables can be accessed, e.g. local, global, 
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











