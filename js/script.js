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

            let trovato = false;

            for( let i = 0; i < listaInvitati.length; i++){
                // console.log(listaInvitati[i]);
                let email = listaInvitati[i];
                
                if(valore == email){
                    console.log('Sei stato invitato');
                   
                    trovato = true;
                    
                } else{
                    console.log('Non sei stato invitato');
                   
                }
            }

            if(trovato == true){
                risposta.innerHTML = 'Sei stato invitato';
            } else{
                risposta.innerHTML = ('Non sei stato invitato');
            }

          }




        //   Gioco dei dadi
        //   Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        //   Stabilire il vincitore, in base a chi fa il punteggio più alto.
        //   Prima di partire a scrivere codice poniamoci qualche domanda:
        //   Che ci sia un array da qualche parte?
        //   Se dobbiamo confrontare qualcosa che "cosa" ci serve?
        //   Consigli del giorno:
        //   1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
        //   2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
        //   3. si ma noi cosa vogliamo fare?
        //   4. torniamo a scrivere in italiano
        //   5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
        


        function lanciaDadi(){

            const numeroUtente = [];
            const numeroComputer = [];
            let risultatoDadi = document.getElementById('risultatoDadi');
           

            const numeroDaGenerare = 1;

                let numeroGeneratoUtente = Math.floor((Math.random() * 6 + 1));
                console.log(numeroGeneratoUtente);

                let numeroGeneratoComputer = Math.floor((Math.random() * 6) + 1);
                console.log(numeroGeneratoComputer);

                const dadiUtente = document.getElementById('dadiUtente');
                const dadiComputer = document.getElementById('dadiComputer');
                    dadiUtente.innerHTML = numeroGeneratoUtente;
                    dadiComputer.innerHTML = numeroGeneratoComputer;

                if (numeroGeneratoUtente > numeroGeneratoComputer){
                    console.log('Ha vinto l utente');
                    risultatoDadi.innerHTML = 'Hai vinto!!';

                } else if (numeroGeneratoUtente == numeroGeneratoComputer){
                    console.log('Pareggio');
                    risultatoDadi.innerHTML = 'Hai pareggiato';

                } else{
                    console.log('Ha vinto il computer');
                    risultatoDadi.innerHTML = 'Hai perso';
                }

        }

