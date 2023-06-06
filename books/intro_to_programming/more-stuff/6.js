// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, pattern) {
  let matches = [];
  for (let i = 0; i < words.length; i += 1) {
    if (pattern.test(words[i])) {
      matches.push(words[i]);
    }
  }
  
  return matches;
}

console.log(allMatches(words, /lab/));