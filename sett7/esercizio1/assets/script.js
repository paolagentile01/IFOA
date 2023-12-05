/* ESERCIZIO 1*/

function concatena(stringa1, stringa2){
let first = stringa1.slice(0, 2);
let second = stringa2.slice(stringa2.length - 3);
let third = first.concat(second);
return third.toUpperCase();
}

console.log(concatena("Ciao", "Mondo"));
