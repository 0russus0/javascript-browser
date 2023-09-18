// Exercices JavaScript : Gestion des Événements
//Exercice 1 : Cliquer sur un Bouton

let myButton = document.createElement("a");
myButton.innerText = "Visiter Musclor.org";
myButton.href = "http://www.musclor.org/";
myButton.target = "_blank";
myButton.classList.add("btn", "btn-primary", "my-button");
myButton.setAttribute("disabled", "true");
document.querySelector("#clickme").appendChild(myButton);

myButton.addEventListener("click", function (e) {
    window.alert("Par le pouvoir du crane ancestral!!!!!");
});

//Exercice 2 : Survoler un Élément
let myButton2 = document.createElement("a");
myButton2.innerText = "Tadaa!!!";
myButton2.href = "#";
myButton2.classList.add("btn", "btn-primary", "my-button");
myButton.setAttribute("disabled", "true");
document.querySelector("#hoverme").appendChild(myButton2);

myButton2.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let newPicture = document.getElementById("pictureTarget");
    newPicture.src = "images/Musclor.jpg";
});

//Exercice 3 : Survoler un Élément
document.addEventListener("keydown", function () {
    let input = document.getElementById("unicInput").value;
    console.log(input);
});

//Exercice 4 : Cliquer en Dehors d'un Élément
document.addEventListener("click", function (e) {
    let dialog = document.querySelector("#blabla");
    if (!dialog.contains(e.target)) {
        console.log(dialog);
        dialog.style.display = "none";
    }
});

//Exercice 5 : Cliquer en Dehors d'un Élément
function valider() {
    if (document.getElementById("prenom") == "") {
        alert("Veuillez entrer votre prénom!");
        return false;
    }

    if (document.getElementById("nom") == "") {
        alert("Veuillez entrer votre nom!");
        return false;
    }

    if (document.getElementById("mail") == "") {
        alert("Veuillez entrer votre e-mail!");
        return false;
    }
}

//Exercice 6 : Défilement de la Page
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 1300
    ) {
        document.getElementById("long").className = "toLong";
    }
}
