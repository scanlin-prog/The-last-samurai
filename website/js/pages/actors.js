import {
	actorsData,
	commonData,
} from '../utils/constants.js';
import { addComponent, findIndexById, toggleButtonState } from '../utils/functions.js';
import Common from '../components/Common.js';
import Section from '../components/Section.js';
import ActorPopup from '../components/ActorPopup.js';

const commonSettings = new Common(commonData);
const actorPopup = new ActorPopup('#popup-actor', actorsData, findIndexById, toggleButtonState);

const actorList = new Section({
	data: actorsData,
	renderer: (dataItem) => {
		addComponent(actorList, '#actor-template', uploadActorData, dataItem)
	}
}, '#actors-place');

function handleActorImageClick(evt) {
	actorPopup.openPopup(evt);
}

function uploadActorData(dataItem, template) {
	const actorImage = template.querySelector('.actor__image');
	const actorName = template.querySelector('.actor__name');
	actorImage.addEventListener('click', handleActorImageClick);

	actorImage.src = dataItem.url;
	actorImage.id = dataItem._id;
	actorName.textContent = dataItem.name;

	return template;
}

commonSettings.setEventListeners();
actorList.renderItems();