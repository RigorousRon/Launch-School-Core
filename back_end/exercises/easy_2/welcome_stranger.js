//Create a function that takes 2 arguments, an array and an object. The array
//will contain 2 or more elements that, when combined with adjoining spaces,
//will produce a person's name. The object will contain two keys, 'title' and
//'occupation', and the appropriate values. Your function should return a
//greeting that uses the person's full name, and mentions the person's title.

let array1 = ["John", "Q", "Doe"];
let object1 = { title: "Master", occupation: "Plumber" };

function greetings(array, object) {
  let name = array.join(' ');
  let values = Object.values(object);
  let title = values[0];
  let occupation = values[1];

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}


console.log(greetings(array1, object1));