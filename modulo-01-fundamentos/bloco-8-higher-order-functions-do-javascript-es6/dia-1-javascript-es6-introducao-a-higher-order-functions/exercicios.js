// EXERCÍCIO 1
const newRegister = (fullName) => {
  const getEmail = fullName.toLowerCase().split(' ').join('_');
  const cadastro = {name: fullName, email: `${getEmail}@trybe.com`};
  return cadastro;
}

const newEmployees = () => {
  const employees = {
    id1: newRegister('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newRegister('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newRegister('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());

// EXERCICIO 2
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


function compareNumbers(number, ramdomNumber) {
  
  if (ramdomNumber === number) {
    return 'Tente novamente'
  } else {
    return 'Parabéns você ganhou!'
  }
}


function numbersDraw(number, callback) {
  const ramdomNumber = Math.floor(Math.random() * 5 + 1);
  return callback(number, ramdomNumber); 
}

console.log(numbersDraw(3, compareNumbers))

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function countAnswers(gabarito, respostas) {
  let nota = 0;
  for (let i = 0; i < respostas.length; i += 1) {
    if (respostas[i] === gabarito[i]) {
      nota += 1
    } else if (respostas[i] === 'N.A') {
      nota += 0
    } else {nota -= 0.5}
  }
  return nota;
}

function totalAnswers(gabarito, respostas, callback) {
  return callback(gabarito, respostas)
}
console.log(totalAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, countAnswers))