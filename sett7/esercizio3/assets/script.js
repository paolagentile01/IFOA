/* ESERCIZIO <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

let books = [];
let shoppingCartList = JSON.parse(localStorage.getItem("shoppingCart"))

fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())  // converti a json
.then(json => { 
  books = json;
  console.log(json);
  showCards(json);
}) 
.catch(err => console.log('Request Failed', err)); 


let container = document.getElementById("container");
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

const addCard = (event, asin) => {
  const book = books.find((book) => book.asin === asin);
  shoppingCartList.push(book);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList))

  loadCart();
  event.target.closest(".card").classList.add("selected");
}

const loadCart = () => {
  
}