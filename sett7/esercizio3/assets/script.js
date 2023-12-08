/* ESERCIZIO <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

let books = [];
let shoppingCartList = [];

fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())  // converti a json
.then(data => { 
  console.log(data);
  books = data;
  showCards(data);
}) 
.catch(err => console.log('Request Failed', err)); 


let container = document.getElementById("container");
let cart = document.getElementById("cart");

function showCards(array){
   array.forEach(book => {
    container.innerHTML += `
    <div class="col">
    <div class=" card h-100 " style=" width: 22rem;">
    <img src="${book.img}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${book.title}</h5>
      <p class="card-text">Category: ${book.category}</p>
      <p class="card-text">Price: $${book.price}</p>
      <a class="btn btn-primary" onclick ="addCard(event,'${book.asin}')">ADD</a>
      <a class="btn btn-danger" onclick ="removeCard(event)">REMOVE</a>
    </div>
  </div>
  </div>
  `
   });
}


const removeCard = (event) => {
  event.target.closest('.col').remove();
}

const removeCart = (event) => {
  event.target.closest('.c-book').remove();
}
const addCard = (event, asin) => {
  event.target.closest(".card").classList.add("selected");
  const book = books.find((book) => book.asin === asin);
  console.log(book);
  shoppingCartList.push(book);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList))
  
}


function loadCart(book) {
  cart.innerHTML += `
  <div class="c-book d-flex bg-success">
  <img src="${book.img}" style=" width: 6rem;">
  <div>
    <h5 > ${book.title}</h5>
    <p class="text">Category: ${book.category}</p>
    <p>Price: $${book.price}</p>
    <a class="btn btn-danger" onclick ="removeCart(event)">REMOVE</a>
  </div>
</div>
`
}

