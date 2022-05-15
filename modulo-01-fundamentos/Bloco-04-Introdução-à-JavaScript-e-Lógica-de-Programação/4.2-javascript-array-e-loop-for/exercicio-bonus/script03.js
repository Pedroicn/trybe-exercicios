// crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

newArray = [];

for(let i = 0; i < numbers.length; i+=1)
{
  if (i + 1 < numbers.length)
  {
    newArray.push(numbers[i] * numbers[i+1]);
  }
  else
  {
    newArray.push(numbers[i] * 2);
  }
}
console.log(newArray);