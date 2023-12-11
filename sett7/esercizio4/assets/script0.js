let productsArray = [];

const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzJkMTJjNmEwZDAwMTg0OTVlZTUiLCJpYXQiOjE3MDIxNDU4MTQsImV4cCI6MTcwMzM1NTQxNH0.PC21xLx4Hc2xmQeza49ACAdFgX1ADVlU3EfxOq52mJM";

function loadFetch(){
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

async function getRecord(id){
    const finalUrl = url + id;
    const response = await fetch(finalUrl, {
    headers: {
        "Authorization": token,
        "Accept": "application/json"
        }
    })
    return response.json(); 
}

const deleteRecord = (id) =>{
    const finalUrl = url + id;
    fetch(finalUrl, {
    method: "DELETE",
    headers: {
        "Authorization": token,
        "Accept": "application/json"
        }
    })
    .then(() => {
        productsArray.splice(products.findIndex(element => element._id === id),1)
        createTable(data);
    })  // converti a json
    .then(data => { 
    productsArray = data;
    console.log(data);
    createTable(data);
    })  
}


function createTable(data){
    const table = document.querySelector('tbody');
    table.innerHTML = '';

    data.forEach(product => {
        let newRow = `
        <tr>
          <th scope="row">${product._id}</th>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.brand}</td>
          <td>${product.price}</td>
          <td>${product.imageUrl.substr (0,40)}</td>
          <td>
        </tr>
        `
        table.innerHTML += newRow;
    });
}


async function handleModalData(id, action){
    const data = await getRecord(id);
    action ==! 'edit'
    ? document.getElementById('buttonSave').style.display = 'none'
    : document.getElementById('buttonSave').style.display = 'block';

    document.getElementById('')
}


const sendData = () => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('brand').value,
        "description": document.getElementById('description').value,
        "price": document.getElementById('price').value,
        "img": document.getElementById('img').value
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
        .then(data => {productsArray.push(data)})
        .then(createTable(productsArray))
}

window.onload = () => {
    loadFetch();
}