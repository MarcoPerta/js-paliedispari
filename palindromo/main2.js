// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('inserisci parola')
console.log(parola);

let parolaAlcontario = '';

for (let i=parola.length -1; i >= 0; i--){
    parolaAlcontario += parola[i];
}
console.log(`${parolaAlcontario}`);

let verifica= false;

function palindroma(){
    if(parola===parolaAlcontario){
        verifica=true;
    }
}

if(verifica){
    console.log('la parola è palindroma')
}else{
    console.log('la parola non è palindroma')
}

// metodo2
// function palindroma(){
//     if(parola===parolaAlcontario){
//     }
// }

// let verifica = palindroma();
// console.log('la parola è palindroma')