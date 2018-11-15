var p1 = prompt('Inserisci la prima parola');
var p2 = prompt('Inserisci la seconda parola');
document.getElementById('lunghezze1').innerHTML = 'La prima parola misura ' + p1.length + ' lettere.';
document.getElementById('lunghezze2').innerHTML = 'La seconda parola misura ' + p2.length + ' lettere.';


if (p1.length > p2.length) {
  document.getElementById('parola').innerHTML = 'La prima parola è più lunga della seconda.';
} else {
  document.getElementById('parola').innerHTML = 'La seconda parola è più lunga della prima.';
}
