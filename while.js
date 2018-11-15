var nomi = ['Luca', 'Fabio', 'Michele', 'Andrea']
console.log(nomi.length);
// -----------------------------------------for
// for (var i = 0; i < nomi.length; i++) {
//   console.log(nomi[i]);
// }
// -----------------------------------------while
// var i = 0;
// while (i < nomi.length) {
//   console.log(nomi[i]);
//   i++;
// }
// -----------------------------------------while2
var check = false;
var nom = 'Faio';
var i = 0;
var ris = 'non trovato'

// while(!check) significa : finche vale la condizione booleana
// che check = false, continua il ciclo. Diciamo che e'
//uno strumento di controllo.
//inoltre, se non metto i < nomi.length, il ciclo
//andra avanti all infinito se non trova il nome
// (cioe i continuera a salire con i++)
while (!check && i < nomi.length) {
  if (nom === nomi[i]) {
    check = true;
    ris = 'trovato'
  }
  i++;
}
console.log(ris);
