// Programa verifica se é um triangulo
const anguloA = 40;
const anguloB = 80;
const anguloC = 60;

let resultado;

if (anguloA + anguloB + anguloC === 180)
{
  resultado = true;
  console.log(resultado);
}
else if (anguloA < 0 || anguloB < 0 || anguloC <0)
{
  resultado = 0;
  console.log(resultado);
}
else
{
  resultado = false;
  console.log(resultado);
}