'use strict';

// Product Construction function
function Product (name, imgSrc) {
  this.name = name;
  this.url = imgSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  Product.all.push(this);
};



//  Global Variables
let lImg = null;
let mImg = null;
let rImg = null;
const roundsToPlay = 4;
let totalClicks = 0;
Product.all = [];



//shuffle an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
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

 for(let product of Product.all) {
    if(product !== prevLeft && product !== prevMiddle && product !== prevRight) {
      lImg = product;
      break;
    }
  }

  for (let product of Product.all) {
    if (product !== prevLeft && product !== prevMiddle && product !== prevRight && product !== lImg) {
      mImg = product;
      break
    }
  }

  for (let product of Product.all) {
    if (product !== prevLeft && product !== prevMiddle && product !== prevRight && product !== lImg && product !== mImg) {
      rImg = product;
      break;
    } 
  }

  renderNewProducts();
}

// Render Products funtion
const renderNewProducts = function () {
  leftImageEl.src = lImg.url;
  leftHeadingEl.textContent = lImg.name;

  middleImageEl.src = mImg.url;
  middleHeadingEl.textContent = mImg.name;

  rightImageEl.src = rImg.url;
  rightHeadingEl.textContent = rImg.name;

}


// Create Products
new Product('Bag', 'img/bag.jpg');
let banana = new Product('Banana', 'img/banana.jpg');
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

//add event listener
prodCtr.addEventListener('click', handleClickOnProduct);


//event handler
function handleClickOnProduct(event) {
  if(totalClicks < roundsToPlay) {
    const productSelected = event.target;
    const id = productSelected.id;

    if(id === 'lImage' || id === 'mImage' || id === 'rImage'  ) {
      if(id === 'lImage') {
        totalClicks++;
        lImg.timesClicked++;
        lImg.timesShown++;
       
      } else if (id === 'mImage') {
        totalClicks++;
        mImg.timesClicked++;
        mImg.timesShown++;
        
      } else {
        totalClicks++;
        rImg.timesClicked++;
        rImg.timesShown++;
      }
    }
    pickProducts();
  }
} 





