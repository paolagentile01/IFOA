const bottone = document.getElementById("add-button");
const body = document.querySelector("#container-lista");

bottone.addEventListener("click", (event) => {
  event.preventDefault();
  const blocco = document.getElementById("input-text");
  if (blocco.value === "") {
    return alert("Inserire task");
  }
  const p = document.createElement("p");
  const complete = document.createElement("button");
  const deleted = document.createElement("button");
  const toDivTotal = document.createElement("div");

  complete.className = "completato";
  deleted.className = "cancella";

  p.innerHTML = blocco.value;
  complete.innerHTML = "completed";
  deleted.innerHTML = "delete";
 
  body.appendChild(toDivTotal);
  toDivTotal.appendChild(p);
  toDivTotal.appendChild(complete);
  toDivTotal.appendChild(deleted);
  blocco.value = "";
});

body.addEventListener("click", (event) => {
  if (event.target.className === "cancella") {
    const item = event.target.parentElement;
    body.removeChild(item); 
  } else if(event.target.className === "completato"){
    const item = event.target.previousSibling;
    item.style.textDecoration = "line-through";
  }
});


