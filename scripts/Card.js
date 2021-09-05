const body = document.body;
export default class Card {
	constructor({title, price, info, image, alt}) {
		this.title = title;
		this.price = price;
		this.info = info;
		this.image = image;
		this.alt = alt;
	}

	getElement() {
		const card = document.createElement('div');
		card.classList.add('card');
		card.innerHTML = `
			<figure>
				<img src="${this.image}" alt="${this.alt}">
				<figcaption>
					<h2 class="card__title">${this.title}</h2>
					<p class="card__price">${this.price}</p>
				</figcaption>
			</figure>
			<p class="card__info">${this.info}</p>
		`

		return card;
	}
	static addEventToAll() {
		let cards = document.getElementsByClassName('card');
		cards = Array.from(cards);
		cards.forEach(card => {
			card.addEventListener('mouseenter', e => {
				e.currentTarget.classList.add('hover');
			});
			card.addEventListener('mouseleave', e => {
				e.currentTarget.classList.remove('hover');
			});
		})

	}

}
