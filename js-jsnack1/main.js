$(document).ready(function(){

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

    // Stampa  nella pagina la lista di bici gia inserita
    for (var i = 0; i < bikeList.length; i++) {
        var listItemClone = $('#templates li').clone();
        listItemClone.text("Nome bici: " + bikeList[i].name + '. Peso: ' + bikeList[i].weightInKg + ' Kg');
        $('.container #bike-list').append(listItemClone);
    }

    // In caso di click sul bottone con id add-bike aggiunge all'array di bici e alla pagina
    // la nuova bici solamente se le condizioni a riga 40 sono rispettate
    $('#add-bike').on('click', function() {
        var bikeWeight = parseInt($('#bike-weight').val());
        var bikeName = $('#bike-name').val();

        if(bikeName != '' && !isNaN(bikeWeight) && bikeWeight > 0) {
            var newBike = {
                name: bikeName,
                weightInKg: bikeWeight
            }

            bikeList.push(newBike);

            var listItemClone = $('#templates li').clone();
            listItemClone.text("Nome bici: " + newBike.name + '. Peso: ' + newBike.weightInKg + ' Kg');
            $('.container #bike-list').append(listItemClone);
        }

        $('#bike-weight').val("");
        $('#bike-name').val("");
    });

    // Nel caso in cui il pulsante con id show-lightest-bike venga cliccato
    // determina la bici più leggera e stampa il risultato in pagina
    $("#show-lightest-bike").on('click', function() {
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

        // Stampa risultato in pagina
        $('h1').show();
        $('#lightest-bike-name').text(mostLightBike.name);
        $('#lightest-bike-weight').text(mostLightBike.weightInKg);

    });


});

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
