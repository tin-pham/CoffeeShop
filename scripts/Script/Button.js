import Store from "./Store.js";
import Cart from "./Cart.js";
const cartButton = document.querySelector(".cart-container");

let amountAdded = cartButton.dataset.added;

export default class Button {
	static toggleCart(card, coffeeObject) {
		const addButton = card.querySelector(".button--plus");
		const removeButton = card.querySelector(".button--minus");
		// Add Label to Card
		Button.#toggleLabel(card, addButton, removeButton);
		// Cart amount
		Button.#toggleAmount(addButton, removeButton);

		// Add item to cart
		Button.#addItem(addButton, coffeeObject);

		Button.#removeItem(removeButton, coffeeObject);

		// Prevent Bubble up to the card
		Button.#preventPropagation(addButton, removeButton);
	}
	static removeElement(element) {
		const button = element.querySelector(".button");

		button.addEventListener("click", (e) => {
			// Remove from the table
			element.remove();
			// Remove label from the menu
		});
	}
	static #toggleLabel(card, addButton, removeButton) {
		addButton.addEventListener("click", (e) => {
			card.classList.add("added");
		});
		removeButton.addEventListener("click", (e) => {
			card.classList.remove("added");
		});
	}

	static #toggleAmount(addButton, removeButton) {
		addButton.addEventListener("click", (e) => {
			// increase cart
			Button.#increaseAmount(1);
		});
		removeButton.addEventListener("click", (e) => {
			Button.#decreaseAmount(1);
		});
	}
	static #preventPropagation(addButton, removeButton) {
		addButton.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		removeButton.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	}
	static #increaseAmount(amount) {
		cartButton.dataset.added = +cartButton.dataset.added + amount;
	}
	static #decreaseAmount(amount) {
		cartButton.dataset.added = +cartButton.dataset.added - amount;
	}

	static #addItem(addButton, item) {
		addButton.addEventListener("click", (e) => {
			Store.add(item.id);
			Cart.add(item);
		});
	}

	static #removeItem(removeButton, item) {
		removeButton.addEventListener("click", (e) => {
			Store.remove(item.id);
		});
	}
}
