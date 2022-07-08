// apiScript.js
// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';
const jokehtml = document.querySelector('#jokeContainer');

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const response = await fetch(API_URL, myObject);
  const data = await response.json();
  jokehtml.innerHTML = data.joke;
};
// fetchJoke()
window.onload = () => fetchJoke();