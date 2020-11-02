// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai
// singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

// Creazione array di oggetti
var oldArray = [{}, {}, {}, {}];

// Creazione array vuoto
var newArray = [];

// Copia degli oggetti nel nuovo array e Creazione di una nuova proprietà per i singoli oggetti
// con valore una lettera casuale ottenuta da una funzione
for (var i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i]);
    newArray[i].position = getRndLetter();
}

for (var i = 0; i < oldArray.length; i++) {
    console.log(oldArray[i]);
}

console.log('----------SEPARATORE-----------');

for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);

}

// Funzione che ritorna una lettera casuale
function getRndLetter() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log(alphabet.length);
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
