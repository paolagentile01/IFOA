/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatena(stringa1, stringa2){
let first = stringa1.slice(0, 2);
let second = stringa2.slice(stringa2.length - 3);
let third = first.concat(second);
return third.toUpperCase();
}

console.log(concatena("Ciao", "Mondo"));
