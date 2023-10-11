const form = document.getElementById('form');
const formSteps = document.querySelectorAll('.form-step');

function showStep(stepNumber) {
	formSteps.forEach((step) => (step.style.display = 'none'));
	const currentStep = document.querySelector(`[data-step="${stepNumber}"]`);
	currentStep.style.display = 'block';
}

function nextStep(currentStep) {
	// Validez les données de l'étape actuelle ici si nécessaire
	// Si les données sont valides, passez à l'étape suivante
	if (currentStep < formSteps.length) {
		showStep(currentStep + 1);
	}
}

function prevStep(currentStep) {
	if (currentStep > 1) {
		showStep(currentStep - 1);
	}
}

function submitForm() {
	// Validez les données de la dernière étape ici si nécessaire
	// Si les données sont valides, soumettez le formulaire
	alert('Formulaire soumis avec succès !');
}

// Affiche la première étape au chargement de la page
showStep(1);
