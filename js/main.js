

function tehtäväLista() {
  // Tehtävän syöttö
var i = document.getElementById('tehtäväSyöttö').value
// Kentän luonti syöttöä varten
var t = document.createTextNode(i)
// Listan luonti
var uusiI = document.createElement('li')
// Listaan luotujen syötteiden tuonti
uusiI.appendChild(t)
// Syötteiden vienti listaan
document.getElementById('tehtävälista').appendChild(uusiI)
}

// Kentän tyhjennys tekstinsyötön jälkeen

function tyhjennys(){
var i = document.getElementById('tehtäväSyöttö').value = ""
}

// Molempien funktioiden käyttö yhdessä nappulassa
function funktiot(){
tehtäväLista();
tyhjennys();

}
