import Render from './Render.js';
document.addEventListener('DOMContentLoaded', () => {
	// Load Menu
	fetch('../scripts/coffees.json')
		.then(response => response.json())
		.then(data => {
			Render.loadMenu(data);
		});




});







