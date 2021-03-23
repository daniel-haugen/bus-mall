'use strict';


const roundsToPlay = 2;

function Product (name, imgSrc) {
  this.name = name ;
  this.url = imgSrc;
  this.timesShown = 0;

  Product.all.push(this);
};

//init product array
Product.all = [];

//init
let leftProduct = null;
let middleProduct = null;
let rightProduct = null;


// DOM Elements to update
const prodCtr = document.getElementById('product-ctr');

const leftImageEl = document.getElementById('lImage');
const middleImageEl = document.getElementById('mImage');
const rightImageEl = document.getElementById('rImage');

const leftHeadingEl = document.getElementById('lHeading');
const middleHeadingEl = document.getElementById('mHeading');
const rightHeadingEl = document.getElementById('rHeading');

function pickProducts() {
  shuffle(Product.all);
  leftProduct = Product.all[0];
  middleProduct = Product.all[1];
  rightProduct = Product.all[2];
  renderNewProducts();
}


const renderNewProducts = function () {
  leftImageEl.src = leftProduct.url;
  leftHeadingEl.textContent = leftProduct.name;

  middleImageEl.src = middleProduct.url;
  middleHeadingEl.textContent = middleProduct.name;

  rightImageEl.src = rightProduct.url;
  rightHeadingEl.textContent = rightProduct.name;

}



//shuffle an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dogDuck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('petSweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('waterCan', 'img/water-can.jpg');
new Product('wineGlass', 'img/wine-glass.jpg');


pickProducts();

function handleClickOnProduct(event) {
  


}



