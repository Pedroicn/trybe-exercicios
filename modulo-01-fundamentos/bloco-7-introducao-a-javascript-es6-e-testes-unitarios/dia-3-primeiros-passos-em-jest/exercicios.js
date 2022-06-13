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

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

module.exports = {myRemove, sum, myFizzBuzz};