import {
	myregexp,
} from './constants.js';
import Component from '../components/Component.js';

export function addComponent(section, template, uploadDataFunc, dataItem) {
	section.addItem(createComponent(template, uploadDataFunc, dataItem))
}

export function createComponent(selector, loadData, dataItem) {
	const component = new Component(selector, loadData, dataItem);
	return component.generateComponent()
}

export function findIndexById(array, compared) {
	const index = array.findIndex(el => el._id === compared.id)

	return index
}

export function toggleButtonState(array, arrIndex, buttonPrev, buttonNext) {

	buttonNext.classList.add('d-sm-flex');
	buttonPrev.classList.add('d-sm-flex');

	if (arrIndex <= 0) {
		buttonPrev.classList.remove('d-sm-flex');
	} else if (arrIndex >= (array.length - 1)) {
		buttonNext.classList.remove('d-sm-flex');
	}
}

export function uploadVideoData(dataItem, template) {
	const videoContent = template.querySelector('.video__content');
	const videoTitle = template.querySelector('.video__title');

	const videoLink = rebuildVideoLink(dataItem.url)

	videoContent.src = videoLink;
	videoTitle.textContent = dataItem.title;

	return template;
}

export function uploadGalleryData(dataItem, template) {
	const slideImage = template.querySelector('.slide__image');

	slideImage.src = dataItem.url;
	slideImage.id = dataItem._id;

	return template;
}

export function uploadServiceData(dataItem, template) {
	const serviceImage = template.querySelector('.service__image');
	const serviceTitle = template.querySelector('.service__title');
	const serviceLink = template.querySelector('.service-link');

	serviceImage.src = dataItem.urlImage;
	serviceTitle.textContent = dataItem.title;
	serviceLink.href = dataItem.link;

	return template;
}

export function rebuildVideoLink(url) {
	const link = url.match(myregexp).join('');
	const videoId = link.slice(-11);

	const readyLink = `https://www.youtube.com/embed/${videoId}`;

	return readyLink;
}