//Exercicio 4 - escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (let i = 0; i <= 50; i+=1){
  let isPrime = true;
  for (let divisor = 2; divisor < i; divisor+=1)
  {
    if( i % divisor === 0)
    {
      isPrime = false;
    }
  } 
  
  if(isPrime)
  {
    maiorPrimo = i;
  }
}
console.log(maiorPrimo)
