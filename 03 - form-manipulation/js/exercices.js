// Your code goes here
// Exercice 1 : Validation de Formulaire

let str = 'youpi';
let rts = str.split('').reverse().join('');
console.log(str + rts);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const baliseName = document.getElementById('name');
	const valeurName = baliseName.value;
	const baliseFirstName = document.getElementById('firstName');
	const valeurFirstName = baliseFirstName.value;
	const all = document.getElementById('all').checked;
	const spam = document.getElementById('spam').checked;

	const frenchNameRegex = /^[a-zA-ZÀ-ÿ-]+$/;

	if (valeurName === '' && valeurFirstName === '') {
		alert('Veuillez indiquer vos nom et prénom');
		return false;
	} else {
		if (valeurName === '' && valeurFirstName) {
			alert('Veuillez indiquer votre nom');
			return false;
		} else {
			if (!valeurName.match(frenchNameRegex))
				window.alert(valeurName + " n'est pas un nom valide!");
			else window.alert('Merci, votre nom est : ' + valeurName);
		}
		if (valeurFirstName === '' && valeurName) {
			alert('Veuillez indiquer votre prénom');
		} else {
			if (!valeurFirstName.match(frenchNameRegex))
				window.alert(valeurFirstName + " n'est pas un nom valide!");
			else window.alert('Merci, votre nom est : ' + valeurFirstName);
		}
		if (!all && !spam) {
			alert('Vous devez TOUT accepter.');
			return false;
		} else
			window.alert('Bravo ' + valeurFirstName + ' ' + valeurName + ' !');
	}
});
