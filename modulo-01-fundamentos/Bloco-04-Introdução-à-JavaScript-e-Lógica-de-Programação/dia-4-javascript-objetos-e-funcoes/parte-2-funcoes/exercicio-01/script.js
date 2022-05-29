// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra){
  let palindromo = true;
  let palavraInvertida = '';
  for(let i = palavra.length - 1; i >= 0; i-=1){
    palavraInvertida += palavra[i]
  }
  if (palavra === palavraInvertida){
    palindromo;
  } else{
    palindromo = false;
  }
  return palindromo
}
console.log(verificaPalindromo('arara'));