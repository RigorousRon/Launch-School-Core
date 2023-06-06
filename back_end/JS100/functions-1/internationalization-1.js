/*
Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
*/

function greet(language) {
  switch (language) {
    case 'en':
      return console.log('Hi!');
    case 'fr':
      return console.log('Salut!');
    case 'pt':
      return console.log('Olá!');
    case 'de':
      return console.log('Hallo!');
    case 'sv':
      return console.log('Hej!');
    case 'af':
      return console.log('Haai!');
    default:
      return console.log('Please choose a supported language code');
  }
}

greet('en');
greet('fr');
greet('pt');
greet('de');
greet('sv');
greet('af');
greet('abc')