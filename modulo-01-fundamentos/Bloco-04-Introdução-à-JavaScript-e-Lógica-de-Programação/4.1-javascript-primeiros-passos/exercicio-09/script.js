/**Exercicio-09 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. */

const a = 5;
const b = 6;
const c = 8;

let resultado;

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1)
{
  resultado = true;
}
else
{
  resultado = false;
}
console.log(resultado);