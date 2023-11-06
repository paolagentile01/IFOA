/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
return l1 * l2;
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(area(10,8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(x,y){
    if (x === Math.round(x) && y === Math.round(y)) {
        if (x === y){
            return (x + y) * 3;
        } 
        else {return x + y;}
    }
    else return 'error: inserire solo numeri interi';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(crazySum(10,10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(b){
    if (typeof(b) === 'number' ) {
      if (b > 19){
        return Math. abs(b - 19) * 3;
      } 
      else return Math. abs(b - 19);
      }
    else return 'error: inserire solo numeri';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(crazyDiff(30));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n){
    if (n === Math.round(n)) {
    if (n >= 20 && n <= 100 || n === 400){
        return  n + ' is ' + true;
    } 
    else {return false;}
    }
    else return 'error: inserire solo numeri interi';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(s){
    if (typeof(s) === 'string' ) {
        parola = s.toUpperCase();
        if ( parola === 'EPICODE'){
            return  s;
        } 
        else {return 'EPICODE ' + s ;}
        }
        else return 'error: inserire solo stringa';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(epify('epicode'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n){
    if (n > 0) {
        if ( n % 3 === 0){
            return  n + ' è un multiplo di 3';
        } 
        else if (n % 7 === 0){
            return  n + ' è un multiplo di 7';
        }
        else return 'condizione non verificata';
    }
        else return 'error: inserire solo numeri positivi';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(check3and7(165));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(reverso){
    if (typeof(reverso) === 'string') {
        let stringaInvertita = '';
        for (let i = reverso.length-1; i >= 0; i--) {
            stringaInvertita += reverso[i];
          }
        return stringaInvertita ;
        }
    else return 'errore';
}
console.log(reverseString('epicode is'));
//OPPURE

function reverseString(reverso){
    if (typeof(reverso) === 'string') {
          return reverso.split("").reverse().join("");
        }
    else return 'errore';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(reverseString('epicode is'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(stringa){
    if (typeof(stringa) === 'string') {
        stringa = stringa.split("");
        stringa[0] = stringa[0].toUpperCase();
        return stringa.join("");
        } 
    else return 'error: inserire solo parole';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(upperFirst('hello world'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa){
    if (typeof(stringa) === 'string') {
        stringa = stringa.slice(1,-1);
        return stringa;
        } 
    else return 'error: inserire solo parole';
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(cutString('Ciao Mondo'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n){
    if (typeof(n) === 'number' ) {
        let casuali = [];
        for (let i = n-1; i >= 0; i--) {
             casuali[i] = Math.floor(Math.random()*11);
          }
        return casuali.join();
        } 
    else return 'error: inserire solo numeri';
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(giveMeRandom(9));



