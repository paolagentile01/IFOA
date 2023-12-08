/* ESERCIZIO <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
window.onload = () => {
  loadCart();
}


let books = [];
let shoppingCartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];

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
    <div class=" card shadow-sm h-100 ">
    <img src="${book.img}" class="card-img-top img-fluid" alt="${book.title}">
    <div class="card-body">
      <h5 class="card-title"> ${book.title}</h5>
      <p class="card-text">Category: ${book.category}</p>
      <p class="card-text">Price: $${book.price}</p>
      <a class="btn btn-primary" onclick ="addCard(event,'${book.asin}')">ADD</a>
      <a class="btn btn-danger" onclick ="removeCard(event)">DELETE</a>
    </div>
  </div>
  </div>
  `
   });
}


const removeCard = (event) => {
  event.target.closest('.col').remove();
}

const removeCart = (asin) => {
  const index = shoppingCartList.findIndex((book) => book.asin === asin);

  if (index !== -1) {
      shoppingCartList.splice(index, 1);
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList))
  }
  loadCart();
}
const addCard = (event, asin) => {
  event.target.closest(".card").classList.add("selected");
  const book = books.find((book) => book.asin === asin);
  console.log(book);
  shoppingCartList.push(book);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList))
  loadCart();

}


function loadCart() {
  cart.innerHTML = "";
  shoppingCartList.forEach((book) => {
  cart.innerHTML += `
  <div class="shopping-item mb-3">
  <div class="d-flex align-items-start gap-2">
        <img src=${book.img}  class="img-fluid" width="60" />
      <div class="flex-grow-1">
          <p class="mb-2">
            ${book.title}
          </p>
          <div class="d-flex justify-content-between">
              <p class="fw-bold">
                ${book.price}€
              </p>
              <div>
                  <div>
                    <button class="btn btn-danger" onclick="removeCart('${book.asin}')">Remove</button>
                  </div>
              </div>
          </div >
      </div >
  </div >
</div>
`;
  });
}

