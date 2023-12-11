let cards = document.getElementById("cards");

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
  loadHomePage();
}) 
.catch(err => console.log('Request Failed', err)); 

}


function loadHomePage(){
    cards.innerHTML = "";
  
    arrayProducts.forEach(product => {
      cards.innerHTML += `
      <div class="col">
      <div class="card h-100 border-info border-2">
        <img src="${product.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} $</p>
          <a href="product.html" class="btn btn-info" onclick="show('${product._id}')">Scopri di più</a>
          <a class="btn btn-warning" onclick=" modifyForm(event, '${product._id}')">Modifica</a>
        </div>
      </div>
    </div>
      `
  });

}


  

function show(productId){
  localStorage.setItem("id", productId);
  console.log(productId);
}




function goBack(event){
  event.target.closest('.row').remove();
}


