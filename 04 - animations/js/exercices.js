// Your code goes here
// --- EXO 1 ---
const tada = document.getElementById('magic');
let coucou = document.querySelector('#coucou');

coucou.addEventListener('click', function (event) {
	console.log(this.classList);
	// Première version => ne fonctionne pas bien.
	/* 		if (document.querySelector('#magic').classList.contains('hide')) {
                document.getElementById.element.className = 'show';
            }

            if (document.querySelector('#magic').classList.contains('show')) {
                document.querySelector('#magic').classList.add('hide');
            } */

	// Deuxième version => qui fonctionne.
	/* 		if (document.querySelector('#magic').className == 'hide') {
			document.querySelector('#magic').className = 'show';
		} else {
			document.querySelector('#magic').className = 'hide';
		}*/

	//Troisième version meilleure :
	if (tada.style.display == 'flex') {
		tada.style.display = 'none';
		setTimeout(() => {
			tada.style.opacity = 0;
		}, 1);
	} else {
		tada.style.display = 'flex';
		setTimeout(() => {
			tada.style.opacity = 1;
		}, 1);
	}
});
