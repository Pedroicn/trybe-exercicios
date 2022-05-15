// Exercicio 6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1)
{
  if (numbers[i] % 2 !== 0)
  {
    resultado += 1;
  }
}
if (resultado !== 0)
{
  console.log(resultado)
}
else
{
  console.log('nenhum valor ímpar encontrado')
}