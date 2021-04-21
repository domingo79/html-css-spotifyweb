//messaggio di aler per il log-in
alert("Ricordati di accedere al tuo account personale, per visualizzare le tue playlist preferite");

/************
 * accesso al dom ...
 * ********************/

// cambio titolo album, con titolo album preferito 
document.getElementById('album_preferito').innerHTML = 'Vasco Rossi';
//titolo album preferito
document.getElementById('sub_title_album').innerHTML = "Una canzone d'amore";
//cambio immagine album
document.getElementById('cover_img').src = "./asset/img/album_vasco.jpg";
// evidenzio la mia playlist preferita
document.getElementById('playlist').innerHTML = 'Vasco Rossi';
