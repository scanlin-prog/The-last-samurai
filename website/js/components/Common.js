export default class Common {
	constructor(selectors) {
		this._headerOverlay = document.querySelector(selectors.headerOverlaySelector);
		this._header = document.querySelector(selectors.headerSelector);
		this._headerIcons = this._header.querySelector('.header__icons');
		this._headerMenu = this._header.querySelector('.header__menu');
		this._buttonMenu = this._header.querySelector('.header__icon-nav');
		this._buttonCloseMenu = this._header.querySelector('.header__icon-close');
		this._toggleLang = this._header.querySelector('.header__icon-lang');
		this._langBubble = this._headerIcons.querySelector('.header__languages');

		this._footer = document.querySelector(selectors.footerSelector);
		this._buttonScroll = this._footer.querySelector('.footer__button');

		this._scrollY = 0;

		this._openMenu = this._openMenu.bind(this);
		this._closeMenu = this._closeMenu.bind(this);
		this._toggleLangBubble = this._toggleLangBubble.bind(this);
		this._handleEscClose = this._handleEscClose.bind(this);
		this._handleMouseClose = this._handleMouseClose.bind(this);
		this._emergenceButtonScroll = this._emergenceButtonScroll.bind(this);

	}

	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this._closeMenu();
			this._closeLangBubble();
		}
	}

	_handleMouseClose(evt) {
		if (evt.target.closest('.header__languages') === null && evt.target !== this._toggleLang) {
			this._closeLangBubble();
		}
	}

	_openMenu() {
		this._headerMenu.classList.add('header__menu_active');
		this._headerOverlay.classList.add('header-overlay_active');
		this._buttonMenu.classList.add('d-none');
		this._buttonCloseMenu.classList.remove('d-none');
	}

	_closeMenu() {
		this._headerMenu.classList.remove('header__menu_active');
		this._headerOverlay.classList.remove('header-overlay_active');
		this._buttonMenu.classList.remove('d-none');
		this._buttonCloseMenu.classList.add('d-none');
	}

	_toggleLangBubble() {
		this._langBubble.classList.toggle('header__languages_active');
	}

	_closeLangBubble() {
		this._langBubble.classList.remove('header__languages_active');
	}

	_emergenceButtonScroll() {
		this._scrollY = window.pageYOffset;
		if (this._scrollY >= 500) {
			this._buttonScroll.classList.add('footer__button_visible')
		} else {
			this._buttonScroll.classList.remove('footer__button_visible')
		}
	}

	_backToTop() {
		window.scrollTo(0, 0);
	}

	setEventListeners() {
		this._buttonMenu.addEventListener('click', this._openMenu);
		this._buttonCloseMenu.addEventListener('click', this._closeMenu);
		this._headerOverlay.addEventListener('mousedown', this._closeMenu);
		this._toggleLang.addEventListener('click', this._toggleLangBubble);
		this._buttonScroll.addEventListener('click', this._backToTop);
		document.addEventListener('keydown', this._handleEscClose);
		document.addEventListener('mousedown', this._handleMouseClose);
		document.addEventListener('scroll', this._emergenceButtonScroll);
	}
}