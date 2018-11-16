var insert = prompt('Inserisci il tuo cognome.');
var lista = ['Rossi', 'Bianchi', 'Ferrari', 'Bocchi'];


/* nel caso in cui la prima lettera sia minuscola, con charAt prendo la prima lettera (posizione 0) e la mando UpperCase,
poi ci concateno il resto della stringa usando slice, dalla lettera in posizione 1 in poi (cioe la seconda lettera) */
var cognome = insert.charAt(0).toUpperCase() + insert.slice(1);
console.log(cognome);
// --------------------------
lista.push(cognome);
lista.sort();
var posizione = lista.indexOf(cognome) + 1;

document.getElementById('cognome').innerHTML = 'Il suo cognome è: ' + cognome;
document.getElementById('lista').innerHTML = 'La lista aggiornata è: ' + lista;
document.getElementById('posizione').innerHTML = 'La posizione del suo cognome nella nuova lista è: ' + posizione;
