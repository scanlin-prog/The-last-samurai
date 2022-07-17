const servicesContainer = document.querySelector('#services-container');
const servicesData = [
	{
		urlImage: '../images/other/kinopoisk.png',
		title: 'Кинопоиск HD',
		link: 'https://www.kinopoisk.ru/film/6764/'
	},
	{
		urlImage: '../images/other/ivi.png',
		title: 'ivi',
		link: 'https://www.ivi.ru/watch/64241'
	},
	{
		urlImage: '../images/other/kion.png',
		title: 'KION',
		link: 'https://www.kinopoisk.ru/film/6764/'
	},
	{
		urlImage: '../images/other/netflix.png',
		title: 'NETFLIX',
		link: 'https://www.kinopoisk.ru/film/6764/'
	},
	{
		urlImage: '../images/other/okko.png',
		title: 'OkkO',
		link: 'https://okko.tv/movie/the-last-samurai'
	},
	{
		urlImage: '../images/other/wink.png',
		title: 'Wink',
		link: 'https://wink.ru/media_items/12038923'
	},
]

function getTemplate() {
	const serviceElement = document.querySelector('#service-template').content.cloneNode(true);

	return serviceElement
}

function generateVideo(data) {
	const service = getTemplate();
	const serviceImage = service.querySelector('.service__image');
	const serviceTitle = service.querySelector('.service__title');
	const serviceLink = service.querySelector('.service-link');

	serviceImage.src = data.urlImage;
	serviceTitle.textContent = data.title;
	serviceLink.href = data.link;

	return service;
}

servicesData.forEach((service) => {
	const serviceContent = generateVideo(service);
	servicesContainer.append(serviceContent);
})