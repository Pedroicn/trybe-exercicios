
function changeX(nome) {
  const frase = 'Tryber x aqui!'
  let novaFrase = frase.split(' ');
  for (let i = 0; i < novaFrase.length; i += 1) {
    if (novaFrase[i] === 'x') {
      novaFrase[i] = nome
    }
  }
  return novaFrase.toString();
}
console.log(changeX())

function newString(nome) {
  const skills = ['javascript', 'html', 'css'];
  return `${changeX(nome)}
Minhas três habilidades são: ${skills}`
}

console.log(newString('pedro'))