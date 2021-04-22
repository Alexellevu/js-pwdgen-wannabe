//chiedi nome all' utente
var nameu = prompt('inserisci il tuo nome');

//chiedi il congnome
var surname = prompt('inserisci il congnome');

//chiedi il colore preferito
var color =prompt('inserisci il tuo colore preferito');

//combina i dati precedenti per creare la password
var password = document.getElementById('passw').innerHTML = nameu + surname + color + '21';

//aggiunto il risultato della password in maiuscolo
/* var uppercasePassword = password.toUpperCase();

var result = document.getElementById("passw");
result.innerHTML = uppercasePassword; */