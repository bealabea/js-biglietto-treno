// creo una variabile che ha come valore l'oggetto html che richiama l'id attribuito
const outputHtml = document.getElementById('output');

//chiedo l'età all'utente usando prompt
let age = prompt('Quanti anni hai?');
age = parseInt(age);

//chiedo quanti km deve fare l'utente usando prompt
let journey = prompt('Quanti km devi percorrere?');
journey = parseInt(journey);

//creo una variabile per il prezzo pieno a cui indico di non superare i due decimali
let price = 0.21 * journey;

// totale Km
document.getElementById('total').innerHTML += `${journey} Km!`;

//creo un ciclo di if: se l'utente ha meno di 18 anni avrà lo sconto del 20%,
//altrimenti se avrà più di 65 anni avrà lo sconto del 40%,
if (age < 18) {
    price = price - (price * 0.2);
} else if (age > 65) {
    price = price - (price * 0.4);  
} else {
    outputHtml.style.color= "Black";
}

outputHtml.innerHTML = `${price.toFixed(2)} €`;

