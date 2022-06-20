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


function techList(array, name) {
 
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

function hydrate(string) {
  let numbers = /\d+/g;
  let stringNumbers = string.match(numbers);
  let arrayNumbers = [];
  let sumNumbers = 0;
  let resultado;
  for(let i = 0; i < stringNumbers.length; i += 1){
    arrayNumbers.push(parseInt(stringNumbers[i]));
  }
  for(let j = 0; j < arrayNumbers.length; j += 1){
    sumNumbers += arrayNumbers[j];
  }
  if(sumNumbers > 1){
    resultado = sumNumbers + ' copos de água';
  }else{
    resultado = sumNumbers + ' copo de água';
  }
  
  return resultado;
}

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let resultadoBusca;
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (id === professionalBoard[i].id) {
      resultadoBusca = professionalBoard[i][detail];
      
    }  
  }
  if (resultadoBusca === undefined) {
    throw new Error('Informação indisponível')
  }
  return resultadoBusca
};


module.exports = {myRemove, sum, myFizzBuzz, decode, encode, techList, hydrate, searchEmployee};