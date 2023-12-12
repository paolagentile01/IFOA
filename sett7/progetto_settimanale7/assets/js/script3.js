const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM";


const searchParams = new URLSearchParams(window.location.search)
console.log(URLSearchParams);
let id = searchParams.get("Id")

window.onload = async () => {
    const response = await fetch(url + id, {
        headers: {
            "Authorization": token,
            "Accept": "application/json"
        }
    })
    let product = await response.json()

    console.log(product);

   let containerProduct = document.getElementById("product-content");
   containerProduct.innerHTML = `
   <h1 class="display-4">Product Details</h1>
   <hr>
   <div class="row"> 
   <div class="col">
   <h2>${product.name}</h2>
   </div>
   </div>
   <div class="row mb-5">              
            <div class="col ">
                <img src="${product.imageUrl}" class="shadow-lg" alt="${product.name}" width="100%">
            </div>
                <div class="col">
                <span class="badge badge-pill badge-dark mb-5" style="font-size: 20px;">${product.price} $</span>
                <p><b>Name of the product:</b>
                <br> ${product.name}</p>
                <p><b>Brand:</b>
                <br>${product.brand}</p> 
                <p><b>Description:</b> 
                <br>${product.description}</p> 
            </div>      
   </div>
   <hr>
   <div class="row"> 
   <div class="col">
        <a href="./home.html" type="button" class="btn btn-info">
        <i class="bi bi-arrow-return-left"></i> GO BACK 
        </a>
   </div>
   </div>
  
   `
}
