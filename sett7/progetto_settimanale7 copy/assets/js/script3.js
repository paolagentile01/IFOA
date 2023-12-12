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
   <img src="${product.imageUrl}">
   <p>${product.name}</p>
   <p>${product.description}</p>
   <p>${product.brand}</p>
   <p>${product.price}</p>
   `
    /*img.src = picInfos.src.original
    img.classList.add("img-fluid", "rounded-lg", "shadow-lg")

    imgContent.appendChild(img)

    const h2 = document.createElement("h2")
    const photographerLink = document.createElement("a")
    photographerLink.classList.add("text-dark", "d-inline-block", "mt-4")
    photographerLink.href = picInfos.photograper_url
    photographerLink.innerText = picInfos.photographer
    h2.appendChild(photographerLink)
    imgContent.appendChild(h2)

    const backLink = document.createElement("a")
    backLink.href = "./index.html"
    backLink.innerText = "⬅️ Go back Home"
    backLink.className = "mb-5"
    imgContent.appendChild(backLink)

    const body = document.querySelector("body")
    body.style.cssText = `min-height: 100vh; background-color: ${picInfos.avg_color}`*/

}
