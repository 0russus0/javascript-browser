// Your code goes here
// Exercice 1 : Validation de Formulaire

let str = 'youpi';
let rts = str.split('').reverse().join('');
console.log(str + rts);

const form = document.querySelector('form');
let regex = new RegExp(`[a-zA-ZÀ-ÿ- ']`);
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const baliseName = document.getElementById('name');
	const valeurName = baliseName.value;
	const baliseFirstName = document.getElementById('firstName');
	const valeurFirstName = baliseFirstName.value;

	if (valeurName === '' && valeurFirstName === '') {
		alert('Veuillez indiquer vos nom et prénom');
		return false;
	} else {
		if (valeurName === '' && valeurFirstName) {
			alert('Veuillez indiquer votre nom');
			return false;
		} else {
			console.log(valeurName);
			var OK = regex.exec(valeurName);
			if (!OK) window.alert(valeurName + " n'est pas un nom valide!");
			else window.alert('Merci, votre nom est : ' + OK[0]);
		}
		if (valeurFirstName === '' && valeurName) {
			alert('Veuillez indiquer votre prénom');
		} else {
			var OK = regex.exec(valeurFirstName);
			if (!OK)
				window.alert(valeurFirstName + " n'est pas un prénom valide!");
			else window.alert('Merci, votre prénom est : ' + OK[0]);
		}
	}
});
