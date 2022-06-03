const header = document.querySelector('.header');
const overlayHeader = document.querySelector('.header-overlay');
const headerIcons = header.querySelector('.header__icons');
const headerMenu = header.querySelector('.header__menu');
const buttonMenu = header.querySelector('.header__icon-nav');
const buttonCloseMenu = header.querySelector('.header__icon-close');
const toggleLang = header.querySelector('.header__icon-lang');
const langBubble = headerIcons.querySelector('.header__languages');
const overlayAwards = document.querySelectorAll('.awards__image-overlay');
const buttonScroll = document.querySelector('.footer__button');

let scrollY;


function handleEscClose(evt) {
	if (evt.key === 'Escape') {
		closeMenu();
		closeLangBubble();
		closeOverlayAward();
	}
}

function handleMouseClose(evt) {
	if (evt.target.closest('.header__languages') === null && evt.target !== toggleLang) {
		closeLangBubble();
	}
	if (evt.target.closest('.awards__image-overlay') === null) {
		closeOverlayAward();
	}
}

function openMenu() {
	headerMenu.classList.add('header__menu_active');
	overlayHeader.classList.add('header-overlay_active');
	buttonMenu.classList.add('d-none');
	buttonCloseMenu.classList.remove('d-none');
}

function closeMenu() {
	headerMenu.classList.remove('header__menu_active');
	overlayHeader.classList.remove('header-overlay_active');
	buttonMenu.classList.remove('d-none');
	buttonCloseMenu.classList.add('d-none');
}

function toggleLangBubble() {
	langBubble.classList.toggle('header__languages_active');
}

function closeLangBubble() {
	langBubble.classList.remove('header__languages_active');
}

function closeOverlayAward() {
	overlayAwards.forEach((overlayAward) => {
		overlayAward.classList.remove('awards__image-overlay_active')
	})
}

function toggleOverlayAward(overlay) {
	overlay.classList.toggle('awards__image-overlay_active')
}

function emergenceButtonScroll() {
	scrollY = window.pageYOffset;
	if (scrollY >= 500) {
		buttonScroll.classList.add('footer__button_visible')
	} else {
		buttonScroll.classList.remove('footer__button_visible')
	}
}

function backToTop() {
	window.scrollTo(0, 0);
}

buttonMenu.addEventListener('click', openMenu);
buttonCloseMenu.addEventListener('click', closeMenu);
overlayHeader.addEventListener('mousedown', closeMenu);
document.addEventListener('keydown', handleEscClose);
document.addEventListener('mousedown', handleMouseClose);
toggleLang.addEventListener('click', toggleLangBubble);
document.addEventListener('scroll', emergenceButtonScroll);
buttonScroll.addEventListener('click', backToTop)

overlayAwards.forEach((overlayAward) => {
	overlayAward.addEventListener('click', () => {
		toggleOverlayAward(overlayAward)
	})
})



document.addEventListener('DOMContentLoaded', function () {

	// $('body').hide()

})
