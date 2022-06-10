let oddsAndEvens = [13, 3, 4, 10, 7, 2];
// ordenação com for
const ordenaArray = (array) => {
  for (let i = 0; i < oddsAndEvens.length - 1; i += 1) {
    for (let j = 0; j < oddsAndEvens.length -1 ; j += 1) {
      if (oddsAndEvens[j] > oddsAndEvens[j + 1]) {
        let temp = oddsAndEvens[j];
        oddsAndEvens[j] = oddsAndEvens[j + 1];
        oddsAndEvens[j + 1] = temp;
      }
    }
  }
  console.log(array);
}
ordenaArray(oddsAndEvens);

// ordenação com sort
const ordenaArraySort = (a, b) => {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  } 
}

console.log(oddsAndEvens.sort(ordenaArraySort));