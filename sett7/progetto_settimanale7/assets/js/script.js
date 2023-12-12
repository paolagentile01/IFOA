const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM";
let productsArray = [];

const searchParams = new URLSearchParams(window.location.search)
console.log(URLSearchParams);
let id = searchParams.get("Id")

window.onload = () =>{
    if(id){
        getId();
    }
    else{
        loadData();
    }
}


async function getId() {
    const response = await fetch(url + id, {
        headers: {
            "Authorization": token,
            "Accept": "application/json"
        }
    })
    let product = await response.json()
    handleData('modify',id, product.name, product.brand, product.description, product.price, product.imageUrl)
}


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
    document.getElementById("add-prod-section").classList.add("d-none");
    document.getElementById("table-section").classList.remove("d-none");
    const table = document.querySelector('tbody');
    table.innerHTML = '';

    data.forEach(product => {
        let newRow = `
        <tr>
          <th scope="row">${product._id}</th>
          <td>${product.name}</td>
          <td>${product.description.substring(0,200)}...</td>
          <td>${product.brand}</td>
          <td>${product.price} $</td>
          <td>${product.imageUrl}</td>
          <td>
          <button type="button" class="btn btn-warning" onclick="handleData('modify', '${product._id}','${product.name}','${product.brand}','${product.description}','${product.price}','${product.imageUrl}')">EDIT</button>
          </td>

          <td>
        </tr>
        `
        table.innerHTML += newRow;
    });
}

function sendData(){
    if(checkValidity()){
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
            loadData();

        }).catch(err => console.log('Request Failed', err));

    } else{
        return alert("Ops... you need valid data")
    }
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
            window.location.href ="./index.html"
         })
         .catch(err => console.log('Request Failed', err)); 
    }
}

function modifyData(id){
    if(checkValidity()){
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
            window.location.href ="./index.html"
        }).catch(err => console.log('Request Failed', err));
    }else{
        return alert("Ops... you need valid data")
    }
}


function handleData(action, id, name, brand, description, price, url){
        if(action === "modify"){
            document.getElementById('inputName').value = name;
            document.getElementById('inputBrand').value = brand;
            document.getElementById('inputDescription').value = description;
            document.getElementById('inputPrice').value = price;
            document.getElementById('inputImageUrl').value = url;
            
            document.getElementById("table-section").classList.add("d-none");
            document.getElementById("add-prod-section").classList.remove("d-none");
            document.getElementById("title").innerText = 'Edit your Product';
            document.getElementById("form-footer").innerHTML = `
            <a class="btn btn-danger" onclick="deleteRecord('${id}')">DELETE</a>
            <a href="./index.html" class="btn btn-secondary">CANCEL</a>
            <a class="btn btn-primary" onclick="modifyData('${id}')">SAVE CHANGES</a>`


        } else{
            document.getElementById("table-section").classList.add("d-none");
            document.getElementById("add-prod-section").classList.remove("d-none");
            document.getElementById("title").innerText = 'Create a New Product';
            document.getElementById("form-footer").innerHTML = `
            <a href="./index.html" class="btn btn-secondary">CANCEL</a>
            <button type="button" class="btn btn-warning" onclick="resetForm()">RESET</button>
            <a onclick="sendData()"  class="btn btn-success">ADD</a>`;
        }     
  
}

function resetForm(){
    document.getElementById("user-form").reset();
}




function checkValidity(){
   let name = document.getElementById('inputName').value;
   let brand = document.getElementById('inputBrand').value;
   let description = document.getElementById('inputDescription').value;
   let price = document.getElementById('inputPrice').value;
   let img = document.getElementById('inputImageUrl').value;

   if(name === "" ||brand === "" ||description === "" ||price === "" ||img === ""){
    return false;
   } else{
    return true;
   }
}