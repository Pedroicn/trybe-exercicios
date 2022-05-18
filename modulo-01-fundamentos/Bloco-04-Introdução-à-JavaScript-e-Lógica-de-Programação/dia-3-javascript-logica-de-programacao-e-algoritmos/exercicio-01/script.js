// Exercicio 1-crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;
let n = 10;

for (let i = 2; i <= n; i += 1){
  fatorial = fatorial * i;
}
console.log(fatorial);