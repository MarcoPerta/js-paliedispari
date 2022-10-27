// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// -prompt per scegliere numero dall'utente e pari o diri
// -creo una funzione per generare numero random da 1 a 5
// -creo somma per sommare n utente e n random 
// -creo variabile soldatino
// -funzione per impostare variabile soldatino
// -dichiarare chi ha vinto

let paridispari = prompt('pari o dispari?');
console.log(paridispari);

let nutente = parseInt(prompt('inserisci numero da 1 a 5'));
console.log(nutente);

function generaNrandom(){
    let random = Math.round((Math.random()*5)+1);
    return random;
}

let nrandom = generaNrandom();
console.log(nrandom);

let somma = nutente + nrandom ; 
console.log(somma)

let vittoria = false;

function pariOdispari(somma){
    if(somma % 2 === 0){
        vittoria = true; 
    }
}

pariOdispari(somma)

if(vittoria ){
    alert("hai vinto")
    console.log('vinto')
}
else{
    alert("hai perso") 
    console.log('perso')
}

