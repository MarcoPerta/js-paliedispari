// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// -prompt per scegliere numero dall'utente e pari o diri
// -creo una funzione per generare numero random da 1 a 5
// -creo somma per sommare n utente e n random 
// -in una funzione stabilisco se il n trovato è pari o dispari
// -dichiarare chi ha vinto

let nutente = prompt('inserisci numero da 1 a 5');
console.log(nutente);

function generaNrandom(num1){
    let random = (Math.round((Math.random()*5)+1));
    num1 = random;
    return random;
}

let nrandom = generaNrandom(num1);
console.log(nrandom);

// let somma = nutente + nrandom ; 
// console.log(somma)

// function pariOdispari(){
//     if(somma % 2 = 0){
//         console.log('numero pari')
//     }
//     else{
//         console.log('numero dispari')
//     }
// }

