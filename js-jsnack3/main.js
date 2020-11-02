// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai
// singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

// Creazione array di oggetti
var oldArray = [
    {
        nome: 'pippo',
        cognome: 'verdi'
    },
    {
        nome: 'pluto',
        cognome: 'gialli'
    },
    {
        nome: 'paperino',
        cognome: 'rossi'
    },
    {
        nome: 'topolino',
        cognome: 'arancioni'
    }
];

// Creazione array vuoto
var newArray = [];

// Copia degli oggetti nel nuovo array e Creazione di una nuova proprietà per i singoli oggetti
// con valore una lettera casuale ottenuta da una funzione
for (var i = 0; i < oldArray.length; i++) {
    newArray.push(JSON.parse(JSON.stringify(oldArray[i])));
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
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
