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

function check() {
    
    savedValue.innerText = localStorage.getItem("user");
}
removeButton.onclick = function(){
    localStorage.removeItem("user");
    savedValue.innerText = "";
}

window.onload = check();
/* ESERCIZIO 2*/
let seconds = document.getElementById("seconds");
setInterval(secondsCount,1000);
let time = sessionStorage.getItem("timeS");



function secondsCount(){
    time++;
    seconds.innerText = time
    sessionStorage.setItem("timeS", time);
}

