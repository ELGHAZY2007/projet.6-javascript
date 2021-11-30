// DECLARATION DES VARIABLES 

var guess = document.getElementById("submitGuess")
var message = document.getElementById("output")
var tentatives = 10;
var tentativeNumber = 10 - tentatives;
var number = Math.floor(Math.random() * 100)
var input = document.getElementById('guess').value;

// TRAITEMENT  

 function submit() {

    tentatives--;
    if (tentatives > 0) {
    
        if (input == number){
            if (tentatives >= 8) {
                message="Bravo, vous etes un Génie !!!"

            }  else {
                    message = "Félicitations, vous avez gagné après " +tentativeNumber+ " tentatives";
                }
        } 
        
        else if (input > number ) {
            message= "Essayer un petit nombre !"

        } 

        else  {
            message= "Essayer un grand nombre !"
        }
    } else {
         message="c'est raté"
     }

// AFFICHAGE

    output.innerHTML=message
}