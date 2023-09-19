// Your code goes here
// Exercice 1 : Validation de Formulaire
document.forms[0].addEventListener("submit", function (evenement) {
    if (document.getElementById("name").value == "") {
        evenement.preventDefault();
        alert("Veuillez indiquer votre nom");
        document.getElementById("email").focus();
    } else if (document.getElementById("firstName").value == "") {
        evenement.preventDefault();
        alert("Veuillez indiquer votre prénom");
        document.getElementById("email").focus();
    }
});
