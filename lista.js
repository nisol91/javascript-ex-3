var cognome = prompt('Inserisci il tuo cognome.');
var lista = ['Rossi', 'Bianchi', 'Ferrari', 'Bocchi'];

lista.push(cognome);
lista.sort();
var posizione = lista.indexOf(cognome) + 1;

document.getElementById('cognome').innerHTML = 'Il suo cognome è: ' + cognome;
document.getElementById('lista').innerHTML = 'La lista aggiornata è: ' + lista;
document.getElementById('posizione').innerHTML = 'La posizione del suo cognome nella nuova lista è: ' + posizione;
