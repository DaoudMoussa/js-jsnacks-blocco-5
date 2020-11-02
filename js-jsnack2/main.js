// Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa (compresi i numeri inseriti)
// tra i due numeri inseriti dall'utente.

// Creazione array conenente una lista di nomi
var nameArray = ['Pippo', 'Pluto', 'Paperino', 'Mario', 'Francesco', 'Luigi', 'Topolino'];
console.log('array vecchio: ' + nameArray);


// Creazione variabile che conterrà l'indice da cui iniziare la copia dell'array
var min;
do {
    // Diminuiamo di uno in quanto il primo elemento ha indice 0
    min = parseInt(prompt('Inserisci la posizione da cui iniziare')) - 1;

    if(min >= nameArray.length) {
        // Se il numero inserito è maggiore o uguale della lunghezza dell'array allora
        // min diventa pari all'indice dell'ultimo elemento
        min = nameArray.length - 1;
    } else if(min < 0) {
        // Se il numero inserito è negativo, allora
        // min diventa pari all'indice del primo elemento (0)
        min = 0;
    }

} while (isNaN(min));

// Creazione variabile che conterrà l'indice in cui finire la copia dell'array
var max;
do {
    // non diminuiamo di 1 in quanto vogliamo comprendere anche l'elemento
    // nell'indice inserito dall'utente
    max = parseInt(prompt('Inserisci la posizionen cui finire'));

    if(max > nameArray.length) {
        // Se il numero inserito è maggiore della lunghezza dell'array allora
        // max diventa pari proprio alla lunghezza in modo da arriare a copiare
        // fino all'ultimo elemento
        max = nameArray.length;
    }

} while (isNaN(min) || max < min);

// Dichiarazione nuovo array
var newNameArray = [];

// Pusha nel nuovo array i nomi che sono compresi tra gli indici min e max
for (var i = min; i < max; i++) {
    newNameArray.push(nameArray[i]);
}

// Stampa array
console.log('array nuovo: ' + newNameArray);
