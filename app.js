// https://www.omnicalculator.com/finance/price-per-sqft

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pricepersqftRadio = document.getElementById('pricepersqftRadio');
const priceorrentRadio = document.getElementById('priceorrentRadio');
const squarefootageRadio = document.getElementById('squarefootageRadio');

let pricepersqft;
let priceorrent = v1;
let squarefootage = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

pricepersqftRadio.addEventListener('click', function() {
  variable1.textContent = 'Price or rent';
  variable2.textContent = 'Square footage';
  priceorrent = v1;
  squarefootage = v2;
  result.textContent = '';
});

priceorrentRadio.addEventListener('click', function() {
  variable1.textContent = 'Price per sqft';
  variable2.textContent = 'Square footage';
  pricepersqft = v1;
  squarefootage = v2;
  result.textContent = '';
});

squarefootageRadio.addEventListener('click', function() {
  variable1.textContent = 'Price per sqft';
  variable2.textContent = 'Price or rent';
  pricepersqft = v1;
  priceorrent = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pricepersqftRadio.checked)
    result.textContent = `Price per sqft = ${computepricepersqft().toFixed(2)}`;

  else if(priceorrentRadio.checked)
    result.textContent = `Price or rent = ${computepriceorrent().toFixed(2)}`;

  else if(squarefootageRadio.checked)
    result.textContent = `Square footage = ${computesquarefootage().toFixed(2)}`;
})

// calculation

function computepricepersqft() {
  return Number(priceorrent.value) / Number(squarefootage.value);
}

function computepriceorrent() {
  return Number(pricepersqft.value) * Number(squarefootage.value);
}

function computesquarefootage() {
  return Number(priceorrent.value) / Number(pricepersqft.value);
}