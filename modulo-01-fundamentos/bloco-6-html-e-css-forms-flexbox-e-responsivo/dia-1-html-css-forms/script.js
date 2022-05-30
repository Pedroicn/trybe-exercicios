
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

let agree = document.querySelector('#acordo');
let submitButton = document.querySelector("#submit")
submitButton.disabled = !agree.checked
// submitButton.addEventListener('click', autorizaImagen)

// function autorizaImagen() {
//   let agree = document.querySelector('#acordo');
//   let formulario = document.querySelectorAll('input')
//   for(let i = 0; i < formu)
// }