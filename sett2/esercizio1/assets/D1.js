/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Stringhe: singolo carattere o sequenza finita di caratteri definite con singoli o doppi apici
let nome1 = "Giovanni";  
console.log(nome1);
// Numerico: numeri interi o decimali
let anni = 10;
console.log(anni);
// Booleani: solo 2 valori che corrispondono a vero o falso
let t = true;
let f = false;
console.log(t);
console.log(f);
// Undefined e Null
let nonDefinito; //Undefined: la variabile non ha valore assegnato o non à definita
let niente = null; //Null: mancata identificazione
console.log(nonDefinito);
console.log(niente);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Paola";
console.log(name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;

console.log(a + b); 

//oppure

a = 12;
b = 20;
let somma = a + b;

console.log(somma); 



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Gentile";
console.log(name);  //questo non darà errore perche si puo riassegnare un valore ad una variabile let

/* const y = 10;
y = 12; 

console.log(y);     //questo al contrario darà errore perche non si puo riassegnare un valore ad una const


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4;
console.log(y - x);

//oppure

let sottrazione = 4 - x;
console.log(sottrazione); 


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2); //il risultato darà false verificando che la loro uguaglianza sia falsa

console.log(name1.toLowerCase() === name2.toLowerCase()); //verifica che la loro uguaglianza sia vera se entrambe vengono trasformate in lowercase

console.log(name2); // verifica che il valore di name2 non cambia


