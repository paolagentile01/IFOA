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
        let card = `<div class="col mb-4">
                <div class="card mb-4 shadow-sm h-100">
                <img src=${product.imageUrl} class="card-img-top img-fluid" alt="${product.name}" >
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title" onclick="goToDetails(${product._id})" style="cursor: pointer">${product.name}</h5>
                    <p class="card-text mt-auto">
                    ${product.description}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-primary"
                            onclick="getDetails('${product._id}')" >
                            Discover more
                        </button>
                        <button class="btn btn-warning" type="button" 
                        data-bs-toggle="modal" data-bs-target="#formModal"
                            onclick="handleData('${product._id}')">
                            Modify
                        </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
                </div>`;

        container.innerHTML += card;
    });
}


function handleData(id){
    document.getElementById("modal-footer").innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="modifyData('${id}')"> MODIFY</button>`
}

function modifyData(id){

    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }
    fetch(url + id, {
        method: "PUT",
        headers: {
            "Authorization": token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newRecord)
        })
        .then(response => response.json())  // converti a json
        .then(data => {
            productsArray.splice(productsArray.findIndex(element => element._id === id), 1, data)
            populateHome(productsArray)

        }).catch(err => console.log('Request Failed', err)); 
}

const getDetails = id => {
    window.location.assign("./details.html?Id=" + id);
};

window.onload = () => {
    populateHome();
}
/*
]]*/