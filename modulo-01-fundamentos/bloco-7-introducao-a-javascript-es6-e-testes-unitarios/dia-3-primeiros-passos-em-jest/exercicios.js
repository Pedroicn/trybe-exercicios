const sum = (a, b) => {
  if(typeof a === 'string' || typeof b === 'string') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
} 

module.exports = sum;