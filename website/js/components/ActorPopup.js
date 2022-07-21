import Popup from './Popup.js';

export default class ActorPopup extends Popup {
	constructor(popupSelector, data, findIndexFunc, toggleButtonValidation) {
		super(popupSelector);
		this._popupContainerImage = this._popup.querySelector('.popup__container-image');
		this._popupImage = this._popup.querySelector('.popup__image');
		this._popupNameActor = this._popup.querySelector('.popup__title-actor');
		this._popupContainerImage = this._popup.querySelector('.popup__container-image');
		this._popupButtonNext = this._popup.querySelector('.popup__button-next');
		this._popupButtonPrev = this._popup.querySelector('.popup__button-prev');
		this._handleSwitches = this._handleSwitches.bind(this);

		this._data = data;
		this._findIndexFunc = findIndexFunc;
		this._toggleButtonValidation = toggleButtonValidation;
	}

	_handleSwitches(evt) {
		let actorIndex = this._findIndexFunc(this._data, this._popupImage);
		switch (evt.currentTarget) {
			case this._popupButtonNext:
				actorIndex += 1;
				break;
			case this._popupButtonPrev:
				actorIndex -= 1;
				break;
		}
		this._popupContainerImage.classList.add('popup__container-image_hidden');
		setTimeout(() => {
			this._loadInformation(this._data, actorIndex);
			this._popupContainerImage.classList.remove('popup__container-image_hidden');
		}, 250);
	}

	_preparePopup(evt) {
		const currentActorIndex = this._findIndexFunc(this._data, evt.target);
		this._loadInformation(this._data, currentActorIndex);
	}

	_loadInformation(actors, actorIndex) {
		this._toggleButtonValidation(actors, actorIndex, this._popupButtonPrev, this._popupButtonNext);

		this._popupImage.src = actors[actorIndex].url;
		this._popupImage.id = actors[actorIndex]._id;
		this._popupNameActor.textContent = actors[actorIndex].name;
	}

	setEventListeners() {
		this._popupButtonNext.addEventListener('click', this._handleSwitches);
		this._popupButtonPrev.addEventListener('click', this._handleSwitches);
		super.setEventListeners();
	}

	removeEventListeners() {
		this._popupButtonNext.removeEventListener('click', this._handleSwitches);
		this._popupButtonPrev.removeEventListener('click', this._handleSwitches);
		super.removeEventListeners();
	}

	openPopup(evt) {
		this._preparePopup(evt);
		super.openPopup();
	}

	closePopup() {
		super.closePopup();
	}
}