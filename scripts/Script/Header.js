const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	changeBackground();
});

function changeBackground() {
	if (isWindowScrolled()) {
		header.classList.add('dark');
	} else {
		header.classList.remove('dark');
	}
}

function isWindowScrolled() {
	return window.pageYOffset > 0;
}

export {header};
