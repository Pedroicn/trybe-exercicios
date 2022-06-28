// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  const uni = array.reduce((acc, name) => acc + name).split('');
  return uni.reduce((acc, crr) => (crr === 'a' || crr === 'A') ? acc + 1 : acc, 0);
  
}
console.log(containsA(names))
