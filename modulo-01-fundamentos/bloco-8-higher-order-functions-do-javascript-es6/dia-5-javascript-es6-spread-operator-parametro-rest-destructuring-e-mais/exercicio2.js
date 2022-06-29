// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...rest) => rest.reduce((acc, crr) => acc + crr);
console.log(sum(3, 5, 6, 12, 33, 56))