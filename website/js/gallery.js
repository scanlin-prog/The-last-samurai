const sliderContainer = document.querySelector('#slider__container');
const sliderMiniContainer = document.querySelector('#slider-mini__container');
const galleryData = [
	{
		url: '../images/gallery/slider_images_one.png'
	},
	{
		url: '../images/gallery/slider_images_two.png'
	},
	{
		url: '../images/gallery/slider_images_three.png'
	},
	{
		url: '../images/gallery/slider_images_four.png'
	},
	{
		url: '../images/gallery/slider_images_five.png'
	},
	{
		url: '../images/gallery/slider_images_six.png'
	},
	{
		url: '../images/gallery/slider_images_seven.png'
	},
	{
		url: '../images/gallery/slider_images_eight.png'
	},
	{
		url: '../images/gallery/slider_images_nine.png'
	},
	{
		url: '../images/gallery/slider_images_ten.png'
	},
	{
		url: '../images/gallery/slider_images_eleven.png'
	},
	{
		url: '../images/gallery/slider_images_twelve.png'
	},
	{
		url: '../images/gallery/slider_images_thirteen.png'
	},
	{
		url: '../images/gallery/slider_images_fourteen.png'
	},
	{
		url: '../images/gallery/slider_images_fifteen.png'
	},
	{
		url: '../images/gallery/slider_images_sixteen.png'
	},
	{
		url: '../images/gallery/slider_images_seventeen.png'
	},
	{
		url: '../images/gallery/slider_images_eighteen.png'
	},
	{
		url: '../images/gallery/slider_images_nineteen.png'
	},
	{
		url: '../images/gallery/slider_images_twenty.png'
	},
	{
		url: '../images/gallery/slider_images_twenty_one.png'
	},
	{
		url: '../images/gallery/slider_images_twenty_two.png'
	},
]

function getTemplate() {
	const cardElement = document.querySelector('#slide-template').content.cloneNode(true);

	return cardElement
}

function generateSlide(image) {
	const slide = getTemplate();
	const slideImage = slide.querySelector('.slide__image');

	slideImage.src = image.url;

	return slide;
}

galleryData.forEach((image) => {
	const galleryImage = generateSlide(image);
	sliderContainer.append(galleryImage);

	const galleryImageMini = generateSlide(image);
	galleryImageMini.querySelector('.swiper-slide').classList.add('slide-mini');
	sliderMiniContainer.append(galleryImageMini);
})

const slider = new Swiper(".slider", {
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
const sliderMini = new Swiper(".slider-mini", {
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


