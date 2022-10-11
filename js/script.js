'use strict';

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const inputEmail = document.getElementById('inputEmail');
console.log(inputEmail);
let valore = inputEmail.value;
console.log(valore);

// Inserisco ARRAY con lista invitati

const listaInvitati = ['mattia@gmail.com', 'giovanni@gmail.com', 'giulia@gmail.com', 'valeria@gmail.com']
console.log(listaInvitati);


for( let i = 0; i < listaInvitati.length; i++){
    console.log(listaInvitati[i]);
    let email = listaInvitati[i];
    let invitato = false;
    
    if(valore == email){
        // invitato = true;
        console.log('Sei stato invitato');
    } else{
        console.log('Non sei stato invitato');
    }
}





