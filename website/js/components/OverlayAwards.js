export default class OverlayAwards {
	constructor(overlayAwards) {
		this._overlayAwards = overlayAwards;

		this._handleEscClose = this._handleEscClose.bind(this);
		this._handleMouseClose = this._handleMouseClose.bind(this);
		this._closeOverlayAward = this._closeOverlayAward.bind(this);
	}

	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this._closeOverlayAward();
		}
	}

	_handleMouseClose(evt) {
		if (evt.target.closest('.awards__image-overlay') === null) {
			this._closeOverlayAward();
		}
	}

	_closeOverlayAward() {
		this._overlayAwards.forEach((overlayAward) => {
			overlayAward.classList.remove('awards__image-overlay_active')
		})
	}

	_toggleOverlayAward(overlay) {
		overlay.classList.toggle('awards__image-overlay_active')
	}

	_setEventListeners() {
		document.addEventListener('keydown', this._handleEscClose);
		document.addEventListener('mousedown', this._handleMouseClose);
	}

	setOptions() {
		this._setEventListeners();

		this._overlayAwards.forEach((overlayAward) => {
			overlayAward.addEventListener('click', () => {
				this._toggleOverlayAward(overlayAward)
			})
		});
	}


}