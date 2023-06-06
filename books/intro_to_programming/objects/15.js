// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// variables arg1 arg2 bar foo qux result
// obj prop names abc def ghi jkl mno pqr 0 1 2 3
// primitive values 'hello' 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 0, 1, 2, all keys, 'Victor', 'Antonina', NaN, null, all property names
// objects bar qux [1, 2, 3[4, 5, 6]], [4, 5, 6]