import Coffee from "./Coffee.js";
import Store from "./Store.js";
// Select the menu
const menu = document.querySelector(".menu__cards");

export default class Render {
	static loadMenu(data) {
		for (let coffee of Object.values(data)) {
			// Create coffee object from json data
			const coffeeObject = new Coffee(coffee);

			Store.items.push(coffeeObject); // Save object in the store
			// Create card DOM
			const coffeeElement = coffeeObject.getCard();

			menu.append(coffeeElement);
		}
		console.log(Store.items);
		Coffee.addHoverEvent();
	}
}
