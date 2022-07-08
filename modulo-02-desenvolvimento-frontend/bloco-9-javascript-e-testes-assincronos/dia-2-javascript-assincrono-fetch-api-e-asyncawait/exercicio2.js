const url = 'https://api.coincap.io/v2/assets';
// const fetch = require('node-fetch');
const crypto = document.querySelector('#cryptos')
async function getArrayCoin() {
  const response = await fetch(url);
  const data = await response.json();
  const coins = data.data.map((coin) => `${coin.name} (${coin.symbol}): ${coin.priceUsd}`);
  const firstCoins = coins.slice(0, 10)
  firstCoins.forEach((coin) => {
    const li = document.createElement('li');
    li.innerHTML = coin
    crypto.appendChild(li)
  })
  
}
getArrayCoin();