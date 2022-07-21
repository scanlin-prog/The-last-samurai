export default class Component {
	constructor(selector, loadData, data) {
		this._selector = selector;
		this._loadData = loadData;
		this._data = data;
	}

	_getTemplate() {
		const templateElement = document.querySelector(this._selector).content.cloneNode(true);

		return templateElement;
	}

	generateComponent() {
		const template = this._getTemplate();
		const component = this._loadData(this._data, template);

		return component;
	}
}