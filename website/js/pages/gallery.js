import {
	galleryData, 
	commonData,
} from '../utils/constants.js';
import { addComponent, uploadGalleryData } from '../utils/functions.js';
import Common from '../components/Common.js';
import Section from '../components/Section.js';

const commonSettings = new Common(commonData);

const galleryList = new Section({
	data: galleryData,
	renderer: (dataItem) => {
		addComponent(galleryList, '#slide-template', uploadGalleryData, dataItem)
	}
}, '#slider__container');

const galleryMiniList = new Section({
	data: galleryData,
	renderer: (dataItem) => {
		addComponent(galleryMiniList, '#slide-mini-template', uploadGalleryData, dataItem)
	}
}, '#slider-mini__container');

commonSettings.setEventListeners();
galleryList.renderItems();
galleryMiniList.renderItems();

const slider = new Swiper('.slider', {
	spaceBetween: 10,
	grabCursor: true,
	navigation: {
		nextEl: '.slider__button-next',
		prevEl: '.slider__button-prev',
	},
	loop: true,
	loopedSlides: 4,
	speed: 1000,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},
	breakpoints: {
		320: {
			spaceBetween: 5,
		},
		576: {
			spaceBetween: 7,
		},
		992: {
			spaceBetween: 10,
		},
	},
});

/* thumbs */
const sliderMini = new Swiper('.slider-mini', {
	centeredSlides: true,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4,
	speed: 1000,
	slideActiveClass: 'slide-mini_active',
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},
	breakpoints: {
		320: {
			spaceBetween: 5,
			touchRatio: 0.5,
			slidesPerView: 3,
		},
		576: {
			spaceBetween: 7,
			slidesPerView: 4.5,
		},
		992: {
			touchRatio: 0,
			spaceBetween: 10,
			slidesPerView: 6.5,
		},
	},
});

slider.controller.control = sliderMini;
sliderMini.controller.control = slider;


