// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 6;
let asterisco = '';

for (let i = 0; i < n; i += 1)
{
  asterisco += "*";
}
for (let j = 0; j < n; j += 1)
{
  console.log(asterisco)

}