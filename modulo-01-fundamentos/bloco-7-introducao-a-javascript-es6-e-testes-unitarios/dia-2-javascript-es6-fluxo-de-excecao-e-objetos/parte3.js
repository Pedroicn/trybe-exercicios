const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2
const addTurno = (lesson, chave, valor) => {
  lesson[chave] = valor;
  return lesson;
}

// console.log(addTurno(lesson2, 'turno', 'noite'));

// Crie uma função para listar as keys de um objeto.
const printKeys = (objeto) => Object.keys(objeto);
// console.log(printKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
const objLength = (objeto) => Object.entries(objeto).length;
console.log(objLength(lesson3));

// Crie uma função para listar os valores de um objeto
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// Usando o objeto criado no exercício anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const countStudents = () => {
  const arrayLessons = Object.keys(allLessons);
  let totalStudents = 0;
  for (let i = 0; i < arrayLessons.length; i += 1) {
    totalStudents += allLessons[arrayLessons[i]].numeroEstudantes
    
  }
    
  return `Número total de estudante é ${totalStudents}`
}
console.log(countStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (lesson, position) => {
  const arrayValues = Object.values(lesson);
  console.log(arrayValues[position]);
}
getValueByNumber(lesson3, 2)


// Crie uma função que verifique se o par (chave / valor) existe na função.
 const verifyPair = (objeto, chave, valor) => {
  let pair = false;
  const entries = Object.entries(objeto);
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i][0] === chave && entries[i][1] === valor) {
      pair = true
    }
  }
  console.log(pair)
 }
verifyPair(lesson3, 'materia', 'Maria Clara')

 