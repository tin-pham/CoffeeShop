import { header } from './Script/Header.js';
import { navigation, buttonNav } from './Script/Navigation.js';
import Render from './Script/Render.js';
import Cart from './Script/Cart.js';
document.addEventListener('DOMContentLoaded', () => {
	// Load Menu
	fetch('../scripts/coffees.json')
		.then((response) => response.json())
		.then((data) => {
			Render.loadMenu(data);
		});
});
