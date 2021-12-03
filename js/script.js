// creo una variabile che ha come valore l'oggetto html che richiama l'id attribuito
const outputHtml = document.getElementById('output');

//chiedo l'età all'utente usando prompt
let age = prompt('Quanti anni hai?');
age = parseInt(age);

//chiedo quanti km deve fare l'utente usando prompt
let journey = prompt('Quanti km devi percorrere?');
journey = parseInt(journey);

//creo una variabile per il prezzo pieno a cui indico di non superare i due decimali
let totalPrice = Math.round ((0.21 * journey) * 100) / 100;

//creo una variabile per il prezzo scontato del 20% a cui indico di non superare i due decimali
let underPrice = Math.round ((totalPrice * 0.8) * 100) / 100;

//creo una variabile per il prezzo scontato del 40% a cui indico di non superare i due decimali
let overPrice = Math.round ((totalPrice * 0.6) * 100) / 100;

//creo un ciclo di if: se l'utente ha meno di 18 anni avrà lo sconto del 20%,
//altrimenti se avrà più di 65 anni avrà lo sconto del 40%,
//altrimenti pagherà prezzo pieno.
if (age < 18) {
    outputHtml.innerHTML += underPrice;
} else if (age > 65) {
    outputHtml.innerHTML += overPrice;
} else {
    outputHtml.innerHTML += totalPrice;
}

//inserisco il simbolo dell'euro nell'html