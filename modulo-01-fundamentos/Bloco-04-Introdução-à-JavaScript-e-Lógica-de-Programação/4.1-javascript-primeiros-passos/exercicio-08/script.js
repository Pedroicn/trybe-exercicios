/*Exercicio 8 -🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.*/

const a = 5;
const b = 7;
const c = 9;

let resultado;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0)
{
  resultado = true;
}
else
{
  resultado = false;
}
console.log(resultado);