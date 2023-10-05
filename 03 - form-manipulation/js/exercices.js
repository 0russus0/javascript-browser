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

let select = document.getElementById('choix');
var champTexte = document.getElementById('champTexte');

select.addEventListener('change', function () {
	champTexte.value = select.value;
});

let suggestions = [
	'Apple',
	'Avion',
	'Banana',
	'Berlingo',
	'Cherry',
	'Coquinou',
	'Date',
	'Grape',
	'Lemon',
	'Mango',
	'Orange',
	'Peach',
	'Pear',
	'Pineapple',
	'Strawberry',
	'Watermelon',
	'Zorro',
];

let inputField = document.getElementById('autocomplete');
let suggestionsDiv = document.getElementById('suggestions');

// Écouter les événements "input" sur le champ de texte
inputField.addEventListener('input', function () {
	var inputValue = inputField.value.toLowerCase();
	var matchingSuggestions = [];

	// Filtrer les suggestions en fonction de ce qui est entré
	matchingSuggestions = suggestions.filter(function (suggestion) {
		return suggestion.toLowerCase().startsWith(inputValue);
	});

	// Afficher les suggestions dans la div dédiée
	suggestionsDiv.innerHTML = '';
	if (matchingSuggestions.length > 0) {
		matchingSuggestions.forEach(function (suggestion) {
			var suggestionItem = document.createElement('div');
			suggestionItem.textContent = suggestion;

			// Écouter les clics sur les suggestions
			suggestionItem.addEventListener('click', function () {
				inputField.value = suggestion;
				suggestionsDiv.style.display = 'none';
			});
			suggestionsDiv.appendChild(suggestionItem);
		});
		suggestionsDiv.style.display = 'block';
	} else {
		suggestionsDiv.style.display = 'none';
	}
});

// Cacher les suggestions lorsque l'utilisateur clique en dehors du champ de texte
document.addEventListener('click', function (event) {
	if (event.target !== inputField) {
		suggestionsDiv.style.display = 'none';
	}
});

let formulaire = document.getElementById('myForm');
var champsDynamiques = document.getElementById('dynamicsFields');
var ajouterChamp = document.getElementById('addField');
var supprimerChamp = document.getElementById('deleteField');

var champCount = 0;

// Fonction pour ajouter un champ de texte
function ajouterChampTexte() {
	champCount++;
	var champTexte = document.createElement('input');
	champTexte.type = 'text';
	champTexte.name = 'champ' + champCount;
	champTexte.placeholder = 'Champ ' + champCount;
	champsDynamiques.appendChild(champTexte);
}

// Fonction pour supprimer le dernier champ de texte
function supprimerChampTexte() {
	if (champCount > 0) {
		var dernierChamp = champsDynamiques.lastChild;
		champsDynamiques.removeChild(dernierChamp);
		champCount--;
	}
}

// Écouter les clics sur les boutons "Ajouter" et "Supprimer"
ajouterChamp.addEventListener('click', ajouterChampTexte);
supprimerChamp.addEventListener('click', supprimerChampTexte);

// Empêcher le formulaire de se soumettre normalement
formulaire.addEventListener('submit', function (event) {
	event.preventDefault();
	// Vous pouvez ajouter ici la logique pour traiter les données du formulaire
});
