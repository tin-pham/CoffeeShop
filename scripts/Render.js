import Card from './Card.js';

// Select the menu 
const menu = document.querySelector('.menu__cards');

export default class Render {
	static loadMenu(data) {
		for (let coffee of Object.values(data)) {
			const coffeeObject = new Card(coffee);

			const coffeeElement = coffeeObject.getElement();



			menu.append(coffeeElement);
		}
		Card.addEventToAll();
	}
}
