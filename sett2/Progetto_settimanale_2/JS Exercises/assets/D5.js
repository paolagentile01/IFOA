/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/



/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

//possiamo stamparli anche uno alla volta 
const result = [];
const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// oppure possiamo stamparli come stringa
for (let i = 0; i < pets.length; i++) {
  result[i] = pets[i];
}

console.log(result.join()); 





/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//possiamo stamparli anche uno alla volta
pets.sort();

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// oppure possiamo stamparli come stringa
const resultSort = pets.sort()
console.log(resultSort.join()); 







/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let reversePets = [];

for (let i = pets.length - 1; i >= 0; i--) {
  reversePets.push(pets[i]);
}


console.log(reversePets);






/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let newPets = reversePets
newPets = reversePets.slice(1).concat(reversePets.slice(0,1));
console.log(newPets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const liPlates = ['ABC8760', 'ABC7087', 'ABC2715']

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = liPlates[i];
}


for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].licensePlate);
}






/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


cars.push({
  brand: 'Toyota',
  model: 'Yaris',
  color: 'white',
  trims: ['hybrid', 'gr-sport'],
  licensePlate: 'ABC8260'
});


for (let i = 0; i < cars.length; i++) {
  let trims = cars[i].trims;
  trims.pop();
}


console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []


for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);





/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0).toLowerCase() === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}









/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let resultArray = [];
let i = 0;

while (numericArray[i] !== 32) {
  resultArray[i] = numericArray[i];
  i++;
}

console.log(resultArray);
console.log(resultArray.join());









/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const italianAlphabet = 'abcdefghilmnopqrstuvz';
const positionsArray = [];

for(let i = 0; i < charactersArray.length; i++) {
  const position = italianAlphabet.indexOf(charactersArray[i]) + 1;
  positionsArray.push(position);
}

console.log(positionsArray);