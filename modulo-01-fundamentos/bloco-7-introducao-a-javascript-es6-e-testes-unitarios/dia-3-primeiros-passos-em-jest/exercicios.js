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

function encode(string) {
  // seu código aqui
  let newString = '';
  for(let i = 0; i < string.length; i+=1){
    if(string[i] === 'a'){
      newString += '1';
    }else if(string[i] === 'e'){
      newString += '2';
    }else if(string[i] === 'i'){
      newString += '3';
    }else if(string[i] === 'o'){
      newString += '4'
    }else if(string[i] === 'u'){
      newString += '5'
    }else{
      newString += string[i]
    }

  }
  return newString
}

function decode(string2) {
  // seu código aqui
  let newString2 = '';
  for(let i = 0; i < string2.length; i+=1){
    if(string2[i] === '1'){
      newString2 += 'a';
    }else if(string2[i] === '2'){
      newString2 += 'e';
    }else if(string2[i] === '3'){
      newString2 += 'i';
    }else if(string2[i] === '4'){
      newString2 += 'o'
    }else if(string2[i] === '5'){
      newString2 += 'u'
    }else{
      newString2 += string2[i]
    }

  }
  return newString2
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  arrayOrdenado = array.sort();
  let objetos = [];
  if(array.length === 0){
    objetos = 'Vazio!';
  }else{
    for (let i = 0; i < arrayOrdenado.length; i+=1){
      objetos.push({tech: arrayOrdenado[i], name: name})
    }
  }
  return objetos;
}
module.exports = {myRemove, sum, myFizzBuzz, decode, encode, techList};