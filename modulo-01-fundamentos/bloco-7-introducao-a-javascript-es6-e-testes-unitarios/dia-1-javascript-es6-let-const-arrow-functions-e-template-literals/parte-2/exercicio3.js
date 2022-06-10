const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
let count = 0;
function clickCounter() {
  count += 1;
  counter.innerText = count;
}
button.addEventListener('click', clickCounter);