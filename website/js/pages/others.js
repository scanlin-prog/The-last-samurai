import {
	servicesData,
	commonData,
} from '../utils/constants.js';
import { addComponent, uploadServiceData } from '../utils/functions.js';
import Common from '../components/Common.js';
import Section from '../components/Section.js';

const commonSettings = new Common(commonData);

const serviceList = new Section({
	data: servicesData,
	renderer: (dataItem) => {
		addComponent(serviceList, '#service-template', uploadServiceData, dataItem)
	}
}, '#services-container');

commonSettings.setEventListeners();
serviceList.renderItems();