const actorsPlace = document.querySelector('#actors-place');
const actorsData = [
	{
		url: '../images/actors/Tom_Cruise.png',
		name: 'Том Круз'
	},
	{
		url: '../images/actors/Ken_Watanabe.png',
		name: 'Кэн Ватанабэ'
	},
	{
		url: '../images/actors/Koyuki_Kato.png',
		name: 'Коюки Като'
	},
	{
		url: '../images/actors/Masato_Harada.png',
		name: 'Масато Харада'
	},
	{
		url: '../images/actors/Timothy_Spall.png',
		name: 'Тимоти Сполл'
	},
	{
		url: '../images/actors/Hiroyuki_Sanada.png',
		name: 'Хироюки Санада'
	},
	{
		url: '../images/actors/Tony_Goldwyn.png',
		name: 'Тони Голдуин'
	},
	{
		url: '../images/actors/Nakamura_Shichinosuke.png',
		name: 'Накамура Ситиносукэ II'
	},
	{
		url: '../images/actors/Shin_Koyamada.png',
		name: 'Син Коямада'
	},
	{
		url: '../images/actors/Billy_Connoly.png',
		name: 'Билли Коннолли'
	},
	{
		url: '../images/actors/Togo_Igawa.png',
		name: 'Того Игава'
	},
	{
		url: '../images/actors/Seizo_Fukumoto.png',
		name: 'Сейдзо Фукумото'
	},
	{
		url: '../images/actors/Sosuke_Ikematsu.png',
		name: 'Соске Икемацу'
	},
	{
		url: '../images/actors/John_Koyama.png',
		name: 'Джон Кояма'
	},
	{
		url: '../images/actors/Shun_Sugata.png',
		name: 'самурай Накао'
	},
]

function getTemplate() {
	const cardElement = document.querySelector('#actor-template').content.cloneNode(true);

	return cardElement
}

function generateCard(card) {
	const actor = getTemplate();
	const actorImage = actor.querySelector('.actor__image');
	const actorName = actor.querySelector('.actor__name');

	actorImage.src = card.url;
	actorName.textContent = card.name;

	return actor;
}

actorsData.forEach((actor) => {
	const actorCard = generateCard(actor);
	actorsPlace.append(actorCard)
})