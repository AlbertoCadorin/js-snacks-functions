/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initialNames(name){
    let initial = [];
    for (let i = 0; i < name.length; i++){
        if(name[i].length > 0 ){
            initial.push(name[i][0]);
        }
    }
    return initial;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initialNames(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]