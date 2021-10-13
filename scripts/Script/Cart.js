import Button from "./Button.js";
import Store from "./Store.js";
class CoffeeRow {
	constructor({id, image, alt, title, price}) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.alt = alt;
		this.price = price;
	}

	getRow() {
		const tr = document.createElement("tr");
		tr.innerHTML = `
			<td>
						<img src="${this.image}" alt="${this.alt}" />
					</td>
					<td>${this.title}</td>
					<td>${this.price}</td>
					<td><input type="number" min="1"  value="1"/></td>
					<td>
						<button class="button button--orange">Xóa</button>
					</td>
			
		`;
		tr.dataset.id = this.id;
		// Add functionality to button
		Button.removeElement(tr);

		// Add functionality to input field
		CoffeeRow.#inputManipulate(tr, this);
		return tr;
	}

	static #inputManipulate(tr, coffee) {
		const input = tr.querySelector("input");

		input.addEventListener("input", () =>
			Money.setSpending(coffee, input.value, "k")
		);
	}
}
class Money {
	static spending = 0;
	static ship = 2000;
	static discount = 1000;
	static total = 0;

	static setSpending(item, amount, tail) {
		Money.clear();
		const price = item.price;
		let value = +price.slice(0, price.indexOf(tail));
		switch (tail) {
			case "k":
				value *= 1000;
				break;
		}
		value *= amount;
		this.spending += value;

		Money.load();
	}
	static calculateTotal() {
		const total = Money.spending + Money.ship - Money.discount;
		console.log(Money.ship, Money.discount);
		this.total = total;
	}

	static load() {
		const priceTable = document.querySelector("tfoot");
		const spendingElement = priceTable.querySelector(".table-spending");
		const totalElement = priceTable.querySelector(".table-total");
		spendingElement.textContent = Money.spending;
		// Calculate Total
		Money.calculateTotal();

		totalElement.textContent = Money.total;
	}
	static clear() {
		Money.spending = 0;
		Money.total = 0;
	}
}

const tbody = document.querySelector("tbody");
const table = document.querySelector("table");
export default class Cart {
	static add(coffee) {
		const tr = new CoffeeRow(coffee);
		const trElement = tr.getRow();
		tbody.append(trElement);
	}

	static remove(coffeeRow) {
		coffeeRow.remove();
	}

	static load() {
		const coffees = Store.itemsAdded;
		// Clear the table and money
		tbody.innerHTML = "";
		Money.clear();
		// Add coffee
		for (let coffee of coffees) {
			Cart.add(coffee);
			// Update money
			Money.setSpending(coffee, 1, "k");
		}
	}
	static show() {
		if (Store.itemsAdded.length == 0) {
			return;
		}
		table.classList.add("show");
		document.body.classList.add("disable");
	}
	static hide() {
		table.classList.remove("show");
		document.body.classList.remove("disable");
	}
}
