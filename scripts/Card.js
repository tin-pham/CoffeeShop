import Button from './Button.js';


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
					<button class="button button--plus" ><i class="far fa-plus-square"></i></button>				
					<button class="button button--minus"><i class="far fa-minus-square"></i></button>
					<p class="card__price">${this.price}</p>
				</figcaption>
			</figure>
			<p class="card__info">${this.info}</p>
		`
		// Add Event to button
		Button.toggleCart(card);
		// Add Event to card (mobile support)
		Card.addTouchEvent(card);
		return card;
	}

	static addTouchEvent(card) {
		card.addEventListener('click', e => {
			const cards = document.querySelectorAll('.card');
			// Clear all first
			for (let card of cards) {
				if (e.currentTarget == card) continue;
				card.classList.remove('touch');
			}
			e.currentTarget.classList.toggle('touch');

		})
	}
	static addHoverEvent() {
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
