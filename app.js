'use strict';

// Product Construction function
function Product(name, imgSrc) {
  this.name = name;
  this.url = imgSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  Product.all.push(this);
}

//  Global Variables
let lImg = null;
let mImg = null;
let rImg = null;
const roundsToPlay = 5; // DANGER DANGER DANGER
let totalClicks = 0;
Product.all = [];
let butt = null;
const resultsSection = document.getElementById('resultList');

//shuffle an array randomly and Create Element functions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createEl(tag, parent, id, text) {
  const el = document.createElement(tag);
  parent.appendChild(el);
  if (id !== undefined) {
    el.id = id;
  }
  if (text !== undefined) {
    el.textContent = text;
  }
  return el;
}

// DOM Elements to update
const prodCtr = document.getElementById('product-ctr');

const leftImageEl = document.getElementById('lImage');
const middleImageEl = document.getElementById('mImage');
const rightImageEl = document.getElementById('rImage');

const leftHeadingEl = document.getElementById('lHeading');
const middleHeadingEl = document.getElementById('mHeading');
const rightHeadingEl = document.getElementById('rHeading');

// Pick Products function
function pickProducts() {
  const prevLeft = lImg;
  const prevMiddle = mImg;
  const prevRight = rImg;

  shuffle(Product.all);

  for (let product of Product.all) {
    if (
      product !== prevLeft &&
      product !== prevMiddle &&
      product !== prevRight
    ) {
      lImg = product;
      break;
    }
  }

  for (let product of Product.all) {
    if (
      product !== prevLeft &&
      product !== prevMiddle &&
      product !== prevRight &&
      product !== lImg
    ) {
      mImg = product;
      break;
    }
  }

  for (let product of Product.all) {
    if (
      product !== prevLeft &&
      product !== prevMiddle &&
      product !== prevRight &&
      product !== lImg &&
      product !== mImg
    ) {
      rImg = product;
      break;
    }
  }

  for (let product of Product.all) {
    product.render();
  }
}

// Render Products funtion

Product.prototype.render = function () {
  leftImageEl.src = lImg.url;
  leftHeadingEl.textContent = lImg.name;

  middleImageEl.src = mImg.url;
  middleHeadingEl.textContent = mImg.name;

  rightImageEl.src = rImg.url;
  rightHeadingEl.textContent = rImg.name;
};

// Create Products
new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Bhair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog-Duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet-Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('Usb', 'img/usb.gif');
new Product('Water Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

// First function call
pickProducts();
renderChart();

//add event listener
prodCtr.addEventListener('click', handleClickOnProduct);

//event handler
function handleClickOnProduct(event) {
  if (totalClicks < roundsToPlay) {
    const productSelected = event.target;
    const id = productSelected.id;
    lImg.timesShown++;
    mImg.timesShown++;
    rImg.timesShown++;

    if (id === 'lImage' || id === 'mImage' || id === 'rImage') {
      if (id === 'lImage') {
        totalClicks++;
        lImg.timesClicked++;
      } else if (id === 'mImage') {
        totalClicks++;
        mImg.timesClicked++;
      } else {
        totalClicks++;
        rImg.timesClicked++;
      }
    }

    if (totalClicks < roundsToPlay) {
      pickProducts();
    } else {
      prodCtr.removeEventListener('click', handleClickOnProduct);
      alert('yo you\'re done');

      renderButton();

      butt = document.getElementById('viewResults');
      butt.addEventListener('click', renderResults);
    }
  }
}

function renderResults() {
  for (let product of Product.all) {
    createEl(
      'li',
      resultsSection,
      undefined,
      `${product.name} was shown ${product.timesShown} times and selected ${product.timesClicked}.`
    );
  }
  butt.removeEventListener('click', renderResults);
}



function renderButton() {
  createEl('button', resultsSection, 'viewResults', 'View Results');
}

function renderChart() {
  var ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}

