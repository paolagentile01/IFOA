/* ESERCIZIO 1*/
let userName = document.getElementById("user-name")
let saveButton = document.getElementById("bottone-save");
let removeButton = document.getElementById("bottone-remove");
let savedValue = document.getElementById("saved-value");

saveButton.onclick  = function(){
    localStorage.setItem("user", userName.value);
    showValue ();
}

function showValue(){
    savedValue.innerText = userName.value;
}


removeButton.onclick = function(){
    localStorage.removeItem("user");
    savedValue.innerText = "";
}
/* ESERCIZIO 2*/


