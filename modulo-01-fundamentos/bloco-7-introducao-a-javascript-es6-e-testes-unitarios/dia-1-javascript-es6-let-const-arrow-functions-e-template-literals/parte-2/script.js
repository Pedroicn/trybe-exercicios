// Crie uma função que receba um número e retorne seu fatorial.

function calculaFatorial(number) {
  let resultado = 1;
  for (let i = 1; i <= number; i += 1) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log(calculaFatorial(0));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const getBiggestWord = (frase) => {
  const wordArray = frase.split(' ');
  for (let i = 0; i < wordArray.length - 1; i += 1) {
    for (let j = 0; j < wordArray.length - 1; j += 1) {
      if (wordArray[j].length < wordArray[j + 1].length) {
        let temp = wordArray[j + 1];
        wordArray[j + 1] = wordArray[j];
        wordArray[j] = temp;
      }
    }
  }
  return wordArray[0];
}

console.log(getBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))