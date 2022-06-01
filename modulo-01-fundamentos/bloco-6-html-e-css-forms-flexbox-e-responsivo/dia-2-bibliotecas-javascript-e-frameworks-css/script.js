
let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearForms)

// function clearForms(event) {
//   event.target = window.location.reload();
// }

function clearForms() {
  let formulario = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  for(let i = 0; i < formulario.length; i += 1) {
    formulario[i].value = '';
    formulario[i].checked = false;
  }
  textArea.value = '';
}

