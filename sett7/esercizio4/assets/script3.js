let prodottoPage = document.getElementById("product");

function loadProduct(product){
    prodottoPage.innerHTML = `
      <div class="col-4">
        <img src="${product.imageUrl}" class="img-fluid" alt="${product.name}">
        <div class="col" >
          <h5>${product.name}</h5>
          <p>${product.price}</p>
          <p>${product.description}</p>
          <p>${product.brand}</p>
        </div>
      </div>
      `
}


function showProduct(){
   let productId = localStorage.getItem("id");
   
      fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxMzE1NDQsImV4cCI6MTcwMzM0MTE0NH0.P9yRahjplDlVyi5xa992230HL0nVFVDDet_E7SCLGbI"
            }
        })
        .then(response => response.json())  // converti a json
        .then(data => { 
          console.log(data);
          loadProduct(data);
        }) 
        .catch(error => console.error('Error:', error));
    
}

showProduct();