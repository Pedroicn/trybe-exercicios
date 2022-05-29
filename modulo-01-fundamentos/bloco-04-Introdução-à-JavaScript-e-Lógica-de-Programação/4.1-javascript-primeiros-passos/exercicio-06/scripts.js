// Programa que informa movimento das peças de xadrez
pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase())
{
  case 'rei': 
    console.log("O rei pode se mover uma casa para qualquer direção");
    break;
  
  case 'rainha':
    console.log("A rainha pode se mover quantas casas quiser em qualquer direção");
    break;
  
  case 'torre':
    console.log('A torre pode se mover quantas casas quiser na vertical ou horizontal');
    break;

  case 'cavalo':
    console.log("O cavalo se move em 'L' e pode pular sobre peças");
    break;

  case 'bispo':
    console.log('O bispo pode se mover quantas casas quiser na diagonal');
    break

  case 'peão':
    console.log('O peão pode se mover duas casas para frente na primeira jogada, mas depois apenas uma cas para fente');
    break

  default:
    console.log('Erro, por favor digite uma peça válida');
    break


}