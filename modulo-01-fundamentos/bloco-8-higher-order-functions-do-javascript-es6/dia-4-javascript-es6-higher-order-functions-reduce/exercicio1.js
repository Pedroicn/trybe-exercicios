// Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
arrays
function flatten(array) {
  return array.reduce( (acc, crr) => acc = acc.concat(crr) )
}
console.log(flatten(arrays))