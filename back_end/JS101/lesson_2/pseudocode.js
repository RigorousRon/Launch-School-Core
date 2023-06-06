/* eslint-disable no-tabs */
/* eslint-disable max-len */
/*
Keyword	Meaning
START	start of the program
SET	set a variable that we can use for later
GET	retrieve input from user
PRINT	display output to user
READ	retrieve a value from a variable
IF/ELSE IF/ELSE	show conditional branches in logic
WHILE	show looping logic
END	end of the program

write out pseudocode (both casual and formal) that does the following:

a function that returns the sum of two numbers

a function that takes an array of strings, and returns a string that is all those strings concatenated together

a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

everyOther([1,4,7,2,5]); // => [1,7,5]

a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

You may assume that both array arguments have the same number of elements.
*/

/*
a function that returns the sum of two numbers

START

# Given two integers called "number1", "number2"

PRINT number1 + number2

END
*/

/*
a function that takes an array of strings, and returns a string that is all those strings concatenated together

START

# Given an array of strings called "array"

SET iterator = 0
SET newString = ''

WHILE iterator < length of array
  newString = concatenation of itself and current array iteration

  iterator = iterator + 1

PRINT newString

END
*/

/*
a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

everyOther([1,4,7,2,5]); // => [1,7,5]

START

# Given an array of integers called "array"

SET iterator = 0
SET newArray = []

WHILE iterator < length of array
  IF array[iterator] % 2 !== 0
    push array[iterator] to newArray

    iterator = iterator + 1

PRINT newArray

END
*/

/*
a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

START

# Given a string of characters called "string" and given character "character"

SET iterator = 0
SET counter = 0

  WHILE iterator < string.length
    IF string[iterator] = character
      counter = counter + 1
    IF counter = 3
      PRINT string.charAt(iterator)
IF counter < 3
  PRINT null

END
*/

/*
a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

START

# Given two arrays of numbers with equal length as input, array1 and array2

SET newArray = []
SET iterator = 0

  WHILE iterator < array1.length
    newArray.push([array1[iterator], array2[iterator]])

  PRINT newArray
*/