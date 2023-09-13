// Exercices JavaScript : Gestion des Événements
//Exercice 1 : Cliquer sur un Bouton

let myButton = document.createElement("a");
myButton.innerText = "Tadaaaa !";
myButton.href = "https://www.google.fr/";
myButton.classList.add( "btn", "btn-primary", "my-button");
myButton.setAttribute("disabled", "true");
document.querySelector("#clickme").appendChild(myButton);


myButton.addEventListener("click", function(e){
    e.preventDefault(); 
    let newPicture = document.getElementById("pictureTarget");
    newPicture.src = "images/Musclor.jpg";
});