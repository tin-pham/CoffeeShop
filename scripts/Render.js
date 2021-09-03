export default class Render {
	static #getCoffees() {
		const coffeeData = fetch('../scripts/coffees.json')
		return coffeeData;
	}
	static loadMenu() {
		const coffeesData = Render.#getCoffees();

		coffeesData
			.then(response => response.json())
			.then(coffees => {

			})
	}
}
