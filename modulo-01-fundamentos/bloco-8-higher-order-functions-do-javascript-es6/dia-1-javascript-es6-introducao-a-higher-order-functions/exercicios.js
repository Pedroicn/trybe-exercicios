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
console.log(newEmployees())