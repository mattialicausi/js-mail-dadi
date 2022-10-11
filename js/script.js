'use strict';

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.




 function send() {

            const inputEmail = document.getElementById('inputEmail');
            //console.log(inputEmail);
            let valore = inputEmail.value;
            //console.log(valore);

            let risposta = document.getElementById('risposta');
            
            // Inserisco ARRAY con lista invitati
            
            const listaInvitati = ['mattia@gmail.com', 'giovanni@gmail.com', 'giulia@gmail.com', 'valeria@gmail.com']
            console.log(listaInvitati);
            
            for( let i = 0; i < listaInvitati.length; i++){
                // console.log(listaInvitati[i]);
                let email = listaInvitati[i];
                
                if(valore == email){
                    console.log('Sei stato invitato');
                    risposta.innerHTML = 'Sei stato invitato';
            
                } else{
                    console.log('Non sei stato invitato');
                    risposta.innerHTML = 'Non sei stato invitato';
                }
                
            }
          }
        



