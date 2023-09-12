// Exercice 1
let newText = document.getElementById("target");
newText.textContent = "Bonjour, DOM !";

// Exercice 2
let newPicture = document.getElementById("pictureTarget");
newPicture.src = "images/Musclor.jpg";

// Exercice 3
let targetDiv = document.getElementsByClassName("parent");
let content = document.getElementById("button");
targetDiv[0].appendChild(content);


// Exercice 4
let targetClass= document.getElementsByClassName("laClasse");
console.log(targetClass);
targetClass[0].className = "laClasseAdallas";

// Exercice 5
let names=[ "Musclor", "Cringer", "Tila", "Skelettor", "Le Monstre"];
for(let i = 0; i < names.length; i++){
    let content = names[i];
    let li = document.createElement('li')
    let targetList= document.getElementById("laListe");
    li.append(content);
    targetList.append(li);
}

// Exercice 6
let listRoles = document.getElementById("listeKill");
console.log(listRoles);

let targets = listRoles.getElementsByTagName('li');
console.log(targets);

let killed = targets[0];
listRoles.removeChild(killed);