//Write a function that takes a positive integer, n, as an argument and logs a
//right triangle whose sides each have n stars. The hypotenuse of the triangle
//(the diagonal side in the images below) should have one end at the lower-left
//of the triangle, and the other end at the upper-right.

/*
Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

function triangle(integer) {
  let star = '*';
  let space = ' ';
  for (let index = 0; index <= integer; index += 1) {
    console.log(`${space.repeat(integer - index) + star.repeat(index)}`);
  }
}

// recursion
// function triangle(n, row = 0, stars = '') {
//   if (row === n) {
//     return;
//   }

//   console.log(' '.repeat(n - row - 1) + stars + '*');
//   triangle(n, row + 1, stars + '*');
// }


triangle(5);