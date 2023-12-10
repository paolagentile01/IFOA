let productContainer = document.getElementById("product-container");
let arrayProducts = [];



loadFetch();

function loadFetch(){
fetch('https://striveschool-api.herokuapp.com/api/product/', {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM"
    }
})
.then(response => response.json())  // converti a json
.then(data => { 
  console.log(data);
  arrayProducts = data;
  loadProducts();
}) 
.catch(err => console.log('Request Failed', err)); 

}


function addNewProduct(){
let nome = document.getElementById("nome-prodotto");
let descrizione = document.getElementById("descrizione");
let prezzo = document.getElementById("prezzo");
let img = document.getElementById("img");
let brand = document.getElementById("brand");

if(nome.value === "" || descrizione.value === "" || prezzo.value === "" || img.value === "" || brand.value === ""){
  return alert("Attenzione: Inserire dati validi");
}

fetch('https://striveschool-api.herokuapp.com/api/product/', {
  method: 'POST',
  body: JSON.stringify({
    "name": nome.value, 
    "description": descrizione.value,
    "brand": brand.value,
    "imageUrl": img.value,
    "price": prezzo.value,
   }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxMzE1NDQsImV4cCI6MTcwMzM0MTE0NH0.P9yRahjplDlVyi5xa992230HL0nVFVDDet_E7SCLGbI"
    }
})
.then(response => response.json())  // converti a json
.then(data => { 
  console.log(data);
  arrayProducts = data;
  loadFetch();
}) 
.catch(error => console.error('Error:', error));

}


function loadProducts(){
  productContainer.innerHTML = "";

  arrayProducts.forEach(product => {
    productContainer.innerHTML += `
    <div class="row mb-3">    
    <div class="col"><img src="${product.imageUrl}" alt="${product.name}" height="100"></div>
    <div class="col"><p>${product.name}</p></div>
    <div class="col"><p>${product.description}</p></div>
    <div class="col"><p>${product.brand}</p></div>
    <div class="col"><p>${product.price} $</p></div>
    <div class="col"><button type="button" class="btn btn-warning" onclick="modifyProductForm(event, '${product._id}')">MODIFY</button></div>
    <div class="col"><button type="button" class="btn btn-danger" onclick="deleteProduct(event,'${product._id}')">DELETE</button></div>
     </div>
    `
  });

  removeLocal();
}

function deleteProduct(event, nameProduct){
  event.target.closest('.row').remove();
  fetch(`https://striveschool-api.herokuapp.com/api/product/${nameProduct}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxMzE1NDQsImV4cCI6MTcwMzM0MTE0NH0.P9yRahjplDlVyi5xa992230HL0nVFVDDet_E7SCLGbI"
      }
  })
  .then(response => response.json())  // converti a json
  .then(data => { 
    console.log(data);
    arrayProducts = data;
    loadFetch();
  }) 
  .catch(error => console.error('Error:', error));

}

function modifyProductForm(event, nameProduct){
  event.target.closest('.row').innerHTML +=`
  <form class="row">
  <div class="col"><input type="url"  placeholder="Immagine Url" id="img2" required></div>
  <div class="col"><input type="text" placeholder="Nome prodotto" id="nome-prodotto2" required></div>
  <div class="col"><input type="text" placeholder="Descrizione prodotto" id="descrizione2" required></div>
  <div class="col"><input type="text" placeholder="Brand" id="brand2" required></div>
  <div class="col"><input type="text" placeholder="Prezzo" id="prezzo2" required></div>
  <div class="col"><button type="button" class="btn btn-success" onclick="modifyProduct('${nameProduct}');">Modify</button></div>
  <div class="col"><button type="button" class="btn btn-secondary" onclick="goBack(event);">Cancel</button></div>
  </form>
  `;
}

function modifyProduct(nameProduct){
  let nome = document.getElementById("nome-prodotto2");
  let descrizione = document.getElementById("descrizione2");
  let prezzo = document.getElementById("prezzo2");
  let img = document.getElementById("img2");
  let brand = document.getElementById("brand2");
  
  if(nome.value === "" || descrizione.value === "" || prezzo.value === "" || img.value === "" || brand.value === ""){
    return alert("Attenzione: Inserire dati validi");
  }
  
  fetch(`https://striveschool-api.herokuapp.com/api/product/${nameProduct}`, {
    method: 'PUT',
    body: JSON.stringify({
      "name": nome.value, 
      "description": descrizione.value,
      "brand": brand.value,
      "imageUrl": img.value,
      "price": prezzo.value,
     }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxMzE1NDQsImV4cCI6MTcwMzM0MTE0NH0.P9yRahjplDlVyi5xa992230HL0nVFVDDet_E7SCLGbI"
      }
  })
  .then(response => response.json())  // converti a json
  .then(data => { 
    console.log(data);
    arrayProducts = data;
    loadFetch();
  }) 
  .catch(error => console.error('Error:', error));
  
}


function goBack(event){
  event.target.closest('.row').remove();
}

function removeLocal(){
  localStorage.removeItem("id");
}