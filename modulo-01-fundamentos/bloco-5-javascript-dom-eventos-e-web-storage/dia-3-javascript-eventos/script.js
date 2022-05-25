function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//EXERCICIO 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysList() {
  for(let i = 0; i < dezDaysList.length; i += 1) {
    let createList = document.createElement('li');
    let days = document.getElementById('days');
    createList.innerHTML = dezDaysList[i];
    days.appendChild(createList);

    if(dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      createList.className = 'day holiday';
    }
    else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      createList.className = 'day friday';
    }
    else if(dezDaysList[i] === 25){
      createList.className = 'day holiday friday';
    }
    else {
      createList.className = 'day'; 
    }
  }

}
createDaysList();

// 🚀 Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(buttonName) {
  
  let botao = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  botao.id = 'btn-holiday';
  

  botao.innerHTML = buttonName;
  buttonContainer.appendChild(botao);
  
}

createButton('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

let getButton = document.querySelector('#btn-holiday')
function mudaCorFeriados() {
  let holidays = document.querySelectorAll('.holiday');
  
  for(let i = 0; i < holidays.length; i += 1) {
    if(holidays[i].style.backgroundColor === 'white') {
      holidays[i].style.backgroundColor = 'red';
    }
    else {
      holidays[i].style.backgroundColor = 'white';
    }
  } 
  
}

getButton.addEventListener('click', mudaCorFeriados)

// 🚀 Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(buttonName) {
  let fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  document.querySelector('.buttons-container').appendChild(fridayButton);
}
createFridayButton('Sexta-feira')

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeFridayDays(sextas) {
  let fridayDays = document.getElementsByClassName('friday');
  let fridayButton = document.getElementById('btn-holiday').nextElementSibling
  let newText = '-';
  
  fridayButton.addEventListener('click', function() {
    for(let i = 0; i < fridayDays.length; i += 1) {
      if(fridayDays[i].innerHTML !== newText) {
        fridayDays[i].innerHTML = newText
      }
      else{
        fridayDays[i].innerHTML = sextas[i];
      }
    }
  })
}
changeFridayDays([4, 11, 18, 25]);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomIn() {
  let allDays = document.querySelector('#days');

  allDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px'
    
  })
}
zoomIn();

function zoomOut() {
  let allDays = document.querySelector('#days');

  allDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px'
    
  })
}
zoomIn();
zoomOut();