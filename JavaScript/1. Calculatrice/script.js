// Fonction pour additionner
function addition(A, B) {
      return A + B;
}

// Fonction pour multiplier
function multiplication(A, B) {
      return A * B;
}

// Fonction pour soustraire
function soustraction(A, B) {
      return A - B;
}

// Fonction pour diviser
function division (A, B) {
      if (B == 0) {
            throw new Error("Impossible de diviser par 0")
      }
      return A / B;
}



  do {
        
      //Demande de l'opération à effectuer
      let choix;

      do {
            
            choix = prompt("Que souhaitez vous faire ?\n\n" 
            + "1 - Addition\n"
            + "2 - Multiplication\n"
            + "3 - Soustraction\n"
            + "4 - Division\n"
            );

      } while (choix != 1 && choix != 2 && choix != 3 && choix != 4); 

      //Demande les deux nombres pour l'opération
      do {
            var nombreUn = Number(prompt("Entrez le 1er nombre.."))
            var nombreDeux = Number(prompt("Entrez le 2ème nombre.."))
      }while (isNaN(nombreUn) || isNaN(nombreDeux))

      //Appelle la fonction choisie et affiche le résultat
      try{
            switch (choix) {
            case "1":
                  var resultat = addition(nombreUn, nombreDeux);
                  break;
            
            case "2":
                  var resultat = multiplication(nombreUn, nombreDeux);
                  break;
            
            case "3":
                  var resultat = soustraction(nombreUn, nombreDeux);
                  break;
      
            case "4":
                  var resultat = division(nombreUn, nombreDeux);
                  break;
      
            default:
                  break;
            }
      
            // Affiche le résultat
            alert("Voici le résultat : " + resultat);
      }
      catch(error) {
            alert(error); // Si une erreur est survenue, on affiche l'erreur
      }

      restart = confirm("Souhaitez-vous refaire un calcul ?")


  } while (restart);