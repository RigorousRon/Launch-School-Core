// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';

function capitalizeWords(string) {
  let array = string.split(' ');

  let mappedArray = array.map((character) => {
    if (/[a-z]/.test(character[0])) {
      const capitalizedFirst = character.charAt(0).toUpperCase();
      const rest = character.slice(1);
      return capitalizedFirst + rest;
    } else {
      return character;
    }
  })

  return mappedArray.join(' ');
}

console.log(capitalizeWords(string));