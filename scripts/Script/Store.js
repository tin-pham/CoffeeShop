import LinkedList from "../Library/LinkedList/LinkedList.js";

export default class Store {
	static items = []; // all the items in json store by Coffee object

	static itemsAdded = new LinkedList();

	static item(id) {
		return Store.items.find((item) => id == item.id);
	}
	static add(id) {
		Store.itemsAdded.append(Store.item(id));
		console.log(Store.itemsAdded);
	}
	static remove(id) {
		const index = Store.itemsAdded.indexOfObjectBaseOnId(id);
		Store.itemsAdded.removeAt(index);
	}
}
