'use strict';


const roundsToPlay = 2;
let totalClicks = 0;

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


pickProducts();


prodCtr.addEventListener('click', handleClickOnProduct);


function handleClickOnProduct(event) {
  if(totalClicks < roundsToPlay) {
    const thingWeClickedOn = event.target;
    const id = thingWeClickedOn.id;
    alert(id);

  } 


}



