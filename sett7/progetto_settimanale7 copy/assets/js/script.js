const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM";
let productsArray = [];

function loadData(){
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
    createTable(data);
    }) 
    .catch(err => console.log('Request Failed', err)); 
}

function createTable(data) {
    const table = document.querySelector('tbody');
    table.innerHTML = '';

    data.forEach(product => {
        let newRow = `
        <tr>
          <th scope="row">${product._id}</th>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.brand}</td>
          <td>${product.price} $</td>
          <td>${product.imageUrl}</td>
          <td>
          <button type="button" class="btn btn-warning modify-product" onclick="showButtons(event, '${product._id}')">MODIFY PRODUCT</button>
          </td>

          <td>
        </tr>
        `
        table.innerHTML += newRow;
    });
}

function sendData(){
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newRecord)
        })
        .then(response => response.json())  // converti a json
        .then(data => {
            productsArray.push(data);
            createTable(productsArray);

        }).catch(err => console.log('Request Failed', err)); 
}


const deleteRecord = (id) => {
    if (confirm('Confermi la tua scelta?')) {
        const finalUrl = url + id
        fetch(finalUrl, {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Accept": "application/json"
                }
        })
        .then(() => {
            productsArray.splice(productsArray.findIndex(element => element._id === id), 1)
            createTable(productsArray)
         })
         .catch(err => console.log('Request Failed', err)); 
    }
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
            createTable(productsArray)

        }).catch(err => console.log('Request Failed', err)); 
}


function handleData(action, id){
    if(action === "cancel"){
        createTable(productsArray);
    }else{
        if(action === "modify"){
            document.getElementById("modal-footer").innerHTML = `
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="modifyData('${id}')"> MODIFY</button>`
        } else{
            document.getElementById("modal-footer").innerHTML = `
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="sendData()">ADD</button>
            <button type="button" class="btn btn-warning" onclick="resetForm()">RESET</button>`
        }     
    }
  
}

function showButtons(event, id){
    console.log(productsArray);
    let modifyBtns = document.querySelectorAll(".modify-product");
    modifyBtns.forEach(element => {
     element.setAttribute('disabled', true);
    });
     event.target.closest('td').innerHTML =`
     <button class="btn btn-danger" type="button" onclick="deleteRecord('${id}')">DELETE</button>
     <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#formModal" onclick= "handleData('modify','${id}')">MODIFY</button>
     <button class="btn btn-secondary" type="button" onclick="handleData('cancel')">CANCEL</button>
     `;
}

function resetForm(){
    document.getElementById("user-form").reset();
}

window.onload = () => {
    loadData();
}
/*
let card = `<div class="col mb-4">
<div class="card mb-4 shadow-sm h-100">
<img src=${image.src.large} class="card-img-top" alt=${image.alt} style="height: 200px; object-fit: cover; cursor: pointer" onclick="goToDetails(${image.id})">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title" onclick="goToDetails(${image.id})" style="cursor: pointer">${image.alt}</h5>
      <p class="card-text mt-auto">
        <a href=${image.photographer_url} target="_blank">
            ${image.photographer}
        </a>
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            onclick="modalLogic(event)"
          >
            Scopri di più
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
              onclick="hideMe(event)">
            Hide
          </button>
        </div>
        <small class="text-muted">9 mins</small>
    </div>
  </div>
</div>
</div>`;]]*/