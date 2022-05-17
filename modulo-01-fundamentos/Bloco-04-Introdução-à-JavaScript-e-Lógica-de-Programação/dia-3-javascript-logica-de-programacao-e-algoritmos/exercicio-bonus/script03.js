// faça um programa que imprima um triângulo retângulo(agora invertido) com 5 asteriscos de base. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let asterisco = '';

for (let linha = n; linha > 0; linha-=1){
  for (let coluna = 0; coluna <= linha; coluna+=1){
    if (coluna < linha){
      asterisco += ' ';
    }else {
      asterisco += '*';
    }
    console.log(asterisco);
  }
  
}

