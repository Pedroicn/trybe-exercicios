/**Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 
-Atente que, sobre o custo do produto, incide um imposto de 20%.
-Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
*/

let valorCusto = 100;
let valorVenda = 150;
let impostoSobreCusto = valorCusto * 0.2;   // 20% sobre o custo
let valorCustoTotal = valorCusto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal;
let vendaMilProdutos = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0)
{
  console.log('Erro, digite um valor maior que zero');
}
else 
{
  console.log(vendaMilProdutos)
}


