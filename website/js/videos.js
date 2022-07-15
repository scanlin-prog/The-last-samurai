const videosContainer = document.querySelector('#videos-container');
const videosData = [
	{
		url: 'https://www.youtube.com/watch?v=_udq5gNb7zY',
		title: 'Последний самурай (реальная история)',
	},
	{
		url: 'https://www.youtube.com/watch?v=nh2njkL-ojg&t=1s',
		title: 'Самураи против императорской армии',
	},
	{
		url: 'https://www.youtube.com/watch?v=Kzpo457VuXk',
		title: 'Атака кавалерии против пушек',
	},
	{
		url: 'https://www.youtube.com/watch?v=Wi2BaXtxf9w',
		title: 'Элиот Тордо Эрху - саундтрек к фильму «Последний самурай»',
	},
	{
		url: 'https://www.youtube.com/watch?v=cQp1BYDGcRo',
		title: '«Последний самурай» - главный саундтрек (пианино)',
	},
	{
		url: 'https://www.youtube.com/watch?v=lPFJ6zdJaM4&t=19s',
		title: 'Ниндзя против самураев',
	},
];

const myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

function getTemplate() {
	const videoElement = document.querySelector('#video-template').content.cloneNode(true);

	return videoElement
}

function generateVideo(data) {
	const video = getTemplate();
	const videoContent = video.querySelector('.video__content');
	const videoTitle = video.querySelector('.video__title');

	const videoLink = rebuildLink(data.url)

	videoContent.src = videoLink;
	videoTitle.textContent = data.title;

	return video;
}

function rebuildLink(url) {
	const link = url.match(myregexp).join('');
	const videoId = link.slice(-11);

	const readyLink = `https://www.youtube.com/embed/${videoId}`;

	return readyLink;
}

videosData.forEach((video) => {
	const videoContent = generateVideo(video);
	videosContainer.append(videoContent);
})
