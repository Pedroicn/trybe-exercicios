const sum = (a, b) => {
  if(typeof a === 'string' || typeof b === 'string') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

const myRemove = (array, item) => {
  let index = array.indexOf(item);
  array.splice(index, 1)
  return array
}
module.exports = {myRemove, sum};