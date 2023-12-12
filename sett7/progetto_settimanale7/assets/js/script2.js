const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM";
let productsArray = [];

function populateHome(){
    fetch(url, {
    headers: {
        "Authorization": token,
        "Accept": "application/json"
        }
    })
    .then(response => response.json())  // converti a json
    .then(data => { 
    productsArray = data;
    console.log(data);
    createCards(data);
    }) 
    .catch(err => console.log('Request Failed', err)); 
}

function createCards(data) {
    let container = document.getElementById('cards-container');
    container.innerHTML = '';

    data.forEach(product => {
        let card = `<div class="col-6 mb-4">
                <div class="card mb-4 shadow-sm h-100">
                <img src=${product.imageUrl} class="card-img-top img-fluid p-4" alt="${product.name}" >
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title" onclick="goToDetails(${product._id})">${product.name}</h5>
                    <p>
                    <b>Price:</b> ${product.price} $<br>
                    <b>Brand:</b>  ${product.brand} <br>
                    <b>Description:</b>  ${product.description.substring(0,200)}...
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        <button
                            type="button"
                            class="btn btn-info  me-2 text-white"
                            onclick="getDetails('${product._id}')" >
                            Discover more
                        </button>
                        <button class="btn btn-warning" type="button" 
                            onclick="GetDataModify('${product._id}')">
                            Modify
                        </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>`;

        container.innerHTML += card;
    });
}



const getDetails = id => {
    window.location.assign("./details.html?Id=" + id);
};

const GetDataModify = id => {
    window.location.assign("./index.html?Id=" + id);
};

window.onload = () => {
    populateHome();
}
