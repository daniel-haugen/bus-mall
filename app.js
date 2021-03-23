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









//shuffle an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}




