import Store from "./Store.js";
import Cart from "./Cart.js";
const cartButton = document.querySelector(".cart-container");
const closeButton = document.querySelector(".button--close");

cartButton.addEventListener("click", Cart.show);
closeButton.addEventListener("click", Cart.hide);

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
			// Decrease the amount
			Button.#decreaseAmount(1);
			// Deal with the card
			const menu = document.querySelector(".menu__cards");
			const relateCard = menu.querySelector(
				`[data-id="${element.dataset.id}"]`
			);
			Button.#removeLabel(relateCard);

			// Remove label from the data
			Store.remove(element.dataset.id);
			// Remove from the table
			element.remove();

			if (Store.itemsAdded.length == 0) Cart.hide();
		});
	}
	static #toggleLabel(card, addButton, removeButton) {
		addButton.addEventListener("click", (e) => {
			Button.#addLabel(card);
		});

		removeButton.addEventListener("click", (e) => {
			Button.#removeLabel(card);
		});
	}
	static #addLabel(card) {
		card.classList.add("added");
	}
	static #removeLabel(card) {
		card.classList.remove("added");
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
			Cart.load();
		});
	}

	static #removeItem(removeButton, item) {
		removeButton.addEventListener("click", (e) => {
			Store.remove(item.id);
			Cart.load();
		});
	}
}
