'use strict'

// Global variables
const myContainer = document.querySelector('section');
const myButton = document.querySelector('section + div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
const results = document.querySelector('ul');

let allProducts = [];
let clicks = 0;
const clicksAllowed = 25;

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.likes = 0;
  this.views = 0;
  allProducts.push(this);
}

new Product('bag', 'jpg');
new Product('banana');
new Product('bathroom');
new Product('boots')
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}
console.log(selectRandomProduct());

function renderProduct() {
  let ProductOne = selectRandomProduct();
  let ProductTwo = selectRandomProduct();
  let ProductThree = selectRandomProduct();
  // array method .includes()
  while (ProductOne === ProductTwo) {
    ProductTwo = selectRandomProduct();
  }
  imageOne.src = allProducts[productOne].src;
  imageOne.alt = allProducts[productOne].name;
  allProducts[productOne].views++;
  imageTwo.src = allProducts[productTwo].src;
  imageTwo.alt = allProducts[productTwo].name;
  allProducts[productTwo].views++;
  imageThree.src = allProducts[productThree].src;
  imageThree.alt = allProducts[productThree].name;
  allProducts[productThree].views++;
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedProduct = event.target.alt;
  // array method .includes ()
  for (let i=0; i < allProducts.length; i++){
    if(clickedProduct === allProducts[i].name) {
      allProducts[i].likes++;
      break;
    }
  }
  renderProduct();
  if (clicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleProductClick);
    myButton.addEventListener('click', handleButtonClick);
    myButton.className = 'clicks-allowed';
  }
}

function handleButtonClick(){
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} view and was clicked ${allProducts[i].likes} times.`;
    results.appendChild(li);
  };
}

renderProduct();

myContainer.addEventListener('click', handleProductClick);