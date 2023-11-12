const tabellone = document.getElementById("container");
let estratti = [];



function generaTabellone (){
    for (i = 0; i < 90 ; i++){
        let casella = document.createElement('div');
        casella.innerText = i + 1;
        casella.classList.add('casella');
        tabellone.appendChild(casella);
    }
}
generaTabellone();


const bottoneEstrai = document.getElementById('estrai');

bottoneEstrai.addEventListener('click', () => {
    estraiNumeri();
})

function estraiNumeri(){
    let numeroEstratto = Math.floor(Math.random() * 91) + 1;
    let doppione = estratti.find(value => value === numeroEstratto);
    if(doppione){
        estraiNumeri();
    } else{
        estratti.push(numeroEstratto);
        document.getElementById('estratto').innerText = numeroEstratto;
        coloraCasella(numeroEstratto);
    }
}

function coloraCasella(numero){
    const caselle = document.querySelectorAll('.casella');
    caselle.forEach((element) => {
        let numCasella = Number(element.innerText);
        if(numCasella === numero){
            element.style.backgroundColor = 'red';
        } 
    })

}


const bottoneReset = document.getElementById('reset');

bottoneReset.addEventListener('click', () => {
    document.getElementById('estratto').innerText = '';
    const caselle = document.querySelectorAll('.casella');
    caselle.forEach((element) => element.style.backgroundColor = 'white');
    estratti = [];

})







const contenitoreSchede = document.getElementById("container-schede");
const bottoneGioca = document.getElementById("gioca");
let arrayNumeri = [];
let count = 0;

bottoneGioca.addEventListener('click', () => {
    let inputSchede = document.getElementById("scegli").value;
    document.getElementById("scegli").value = '';
    if (inputSchede === ''){
        return alert('Inserire numero schede');
    }
    console.log(inputSchede);
    count++;
    const giocatore = document.createElement('p');
    giocatore.innerText = `Giocatore: ${count}`;
    giocatore.classList.add('giocatore');
    contenitoreSchede.appendChild(giocatore);
    for (y = 0; y < inputSchede ; y++){
        const titoloScheda = document.createElement('p');
        titoloScheda.innerText = `Scheda ${y + 1 }`;
        titoloScheda.classList.add('titoloScheda');
        contenitoreSchede.appendChild(titoloScheda);

        for (i = 0; i < 24 ; i++){
            generaSchedeGiocatore();
        }
        arrayNumeri = [];
    }

})





function generaSchedeGiocatore(){
    let numeroEstratto = Math.floor(Math.random() * 91) + 1;
    let doppione = arrayNumeri.find(value => value === numeroEstratto);
    if(doppione){
        generaSchedeGiocatore();
    } else{
        arrayNumeri.push(numeroEstratto);
        let casellaGiocatore = document.createElement('div');
        casellaGiocatore.innerText = numeroEstratto;
        casellaGiocatore.classList.add('casella');
        contenitoreSchede.appendChild(casellaGiocatore);
    }
}