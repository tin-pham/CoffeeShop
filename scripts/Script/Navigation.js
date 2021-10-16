const navigation = document.querySelector('.header__nav');
const buttonNav = document.querySelector('.button--nav');

buttonNav.addEventListener('click', () => {
	if (isNavHidden(navigation)) {
		showNav();
	} else {
		hideNav();
	}
});

function isNavHidden(element) {
	return element.classList.contains('nav-hide');
}

function showNav() {
	navigation.classList.remove('nav-hide');
	navigation.classList.add('nav-show');
}

function hideNav() {
	navigation.classList.add('nav-hide');
	navigation.classList.remove('nav-show');
}

export { navigation, buttonNav };
