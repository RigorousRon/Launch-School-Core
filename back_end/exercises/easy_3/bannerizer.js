//Write a function that will take a short line of text, and write it to the
//console log within a box.

/*
Examples:

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/

function logInBox(string, maxWidth) {
  let stringLength = string.length;
  if (maxWidth < stringLength) {
    string = string.slice(0, maxWidth);
    stringLength = maxWidth;
  }

  let bars = '-'.repeat(stringLength + 2);
  let spaces = ' '.repeat(stringLength + 2);

  console.log(`+${bars}+\n|${spaces}|\n| ${string} |\n|${spaces}|\n+${bars}+`);
}

// function logInBoxWrap (str, max) {
//   let topAndBottom = [`+${"-".repeat(max - 2)}+`,`|${" ".repeat(max - 2)}|`];
//   let strArray = str.split('');
//   let txtLines = [];

//   while (strArray.length) {
//     let line = `| ${strArray.splice(0, max - 4).join('')}`;
//     if (line.length < max - 2) {
//       txtLines.push(`${line.concat(' '.repeat(max - line.length - 2))} |`);
//     } else {
//       txtLines.push(line + " |");
//     }
//   }

//   topAndBottom.forEach(line => console.log(line));
//   txtLines.forEach(line => console.log(line));
//   topAndBottom.reverse().forEach(line => console.log(line));
// }
// logInBoxWrap('To boldly go where no one has gone before.', 25);

logInBox('To boldly go where no one has gone before', 10);
logInBox('To boldly go where no one has gone before');
logInBox('');
