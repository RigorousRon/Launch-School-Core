/*
Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

(If you're interested, you can find a list of locales here: http://www.localeplanet.com/icu/iso639.html)
*/

function localGreet(locale) {

  let language = locale.split('_')[0];
  let region = locale[3] + locale[4];

  switch (language) {
    case 'en':
      switch (region) {
        case 'US':
          return console.log('Hey!');
        case 'GB':
          return console.log('Hello!');
        case 'AU':
          return console.log('Howdy!');
        case 'CA':
          return console.log('Hello eh!');
      }
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
      return console.log('Please choose a supported language and region code');
    }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('en_CA.UTF-8'); // 'Hello, Eh!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'


