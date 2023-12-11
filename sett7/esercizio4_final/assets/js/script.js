const key = "bSL8W6EiZexGhso8D2GhA27NcBK5EgjYKcf1TS5fqqWxaoKG7wO59Lso";

const queryFirst = "Nature";
const querySecond = "Cat";

let arrayData = [];

function getRecords(query){
    fetch(`https://api.pexels.com/v1/search?query=[${query}]`, {
        headers: {
            "Authorization": key,
            "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data.photos);
            populatePage(data.photos);
            })
        .catch(err => console.log('Request Failed', err)); 
}


function populatePage(photos){
    let container = document.getElementById("populateContainer");

    container.innerHTML = "";
    photos.forEach(photo => {
        let card = `
        <div class="col col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src ="${photo.src.original}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">photographer: ${photo.photographer} </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="goToDetails(${photo.id})">
                      VIEW
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide(event)">
                      HIDE
                    </button>
                  </div>
                  <small class="text-muted">id:${photo.id}</small>
                </div>
              </div>
            </div>
          </div>
        `
        container.innerHTML += card;
    });


}

function getPhotos(action) {
    action === 'first' ? getRecords(queryFirst): getRecords(querySecond);
}

function hide(event) {
    event.target.closest(".col").remove();
}

function search() {
    let input = document.getElementById("input-search").value;
    console.log(input);
    fetch(`https://api.pexels.com/v1/search?query=[${input}]`, {
        headers: {
            "Authorization": key,
            "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data.photos);
            populatePage(data.photos);
            })
        .catch(err => console.log('Request Failed', err)); 
}

const goToDetails = id => {
  window.location.assign("./details.html?picId=" + id);
};