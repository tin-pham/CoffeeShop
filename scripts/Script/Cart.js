import Button from "./Button.js";
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
					<td><input type="number" min="1" /></td>
					<td>
						<button class="button button--orange">Xóa</button>
					</td>
			
		`;
		tr.dataset.id = this.id;
		// Add functionality to button
		Button.removeElement(tr);
		return tr;
	}
}

export default class Cart {
	static add(coffee) {
		const tr = new CoffeeRow(coffee);
		console.log(coffee);
		const trElement = tr.getRow();

		const tbody = document.querySelector("tbody");
		tbody.append(trElement);
	}

	static remove(coffeeRow) {
		coffeeRow.remove();
	}
}
