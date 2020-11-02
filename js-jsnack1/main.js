// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// creazione lista biciclette con corrispondenti nomi e pesi
var bikeList = [
    {
        name: 'pippoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'plutoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'paperinoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'topolinoBike',
        weightInKg: getRndNumber(10, 100)
    }
];

console.log(bikeList);

// Creazione variabile che conterrà i dati della bici più leggera.
// Assumiamo che inizialmente la pù leggera è quella all'indice 0
var mostLightBike = bikeList[0];

// Confrontiamo la proprietà weightInKg ogni elemento dell'array
// (tranne quello in posizione 0) con quella della variabile mostLightBike
// Se quella dell'elemento in esame è minore allora mostLightBike prende il valore
// dell'eemento in questione
for (var i = 1; i < bikeList.length; i++) {
    if(bikeList[i].weightInKg < mostLightBike.weightInKg) {
        mostLightBike = bikeList[i];
    }
}

console.log(mostLightBike);

console.log('La bici più leggera è ' + mostLightBike.name + ' con un peso di ' + mostLightBike.weightInKg + ' Kg');

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
