// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// -prompt inserire parola
// funzione
// dentro : fare variabile soldatino
// stabilire for per parola al contrario
// equiparare le due parole se sono uguali true
// fuori funzione stabilire se è o non è palindroma


let parola = prompt('inserisci parola')
console.log(parola);

function palindroma(parola){

    let verifica= false;

    let parolaAlcontario = '';

    for (let i=parola.length -1; i >= 0; i--){
    parolaAlcontario += parola[i];
    }
    console.log(`${parolaAlcontario}`);

    if(parola===parolaAlcontario){
        return true
    }
}

if(true){
    console.log('la parola è palindroma')
}else{
    console.log('la parola non è palindroma')
}



