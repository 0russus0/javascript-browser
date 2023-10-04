// Your code goes here
// Exercice 1 : Validation de Formulaire
// #### Exercice 2 : Récupération de Données de Formulaire

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const baliseName = document.getElementById('name');
	const valeurName = baliseName.value;
	const baliseFirstName = document.getElementById('firstName');
	const valeurFirstName = baliseFirstName.value;
	const frenchNameRegex = /^[a-zA-ZÀ-ÿ-]+$/;
	const all = document.querySelector('input[name="all"]:checked');
	const spam = document.querySelector('input[name="spam"]:checked');
	const contract = all.value;
	const letter = spam.value;
	const answer = [];
	const checkboxes = document.getElementsByName('answer');

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
			return false;
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

		// Afficher les données dans la page HTML
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				console.log(checkboxes[i]);
				answer.push(checkboxes[i].value);
			}
		}
		const datasDiv = document.getElementById('datas');
		datasDiv.innerHTML =
			'<h3>Résultats du formulaire :</h3>' +
			'<p>Nom : ' +
			valeurName +
			'</p>' +
			'<p>Prénom : ' +
			valeurFirstName +
			'</p>' +
			'<p>Votre âme est : ' +
			contract +
			'</p>' +
			'<p>Vous allez être : ' +
			letter +
			'</p>' +
			'<p>' +
			answer.join(', ') +
			'</p>';
	}
});
