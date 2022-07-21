import {
	videosData,
	commonData,
} from '../utils/constants.js';
import { addComponent, uploadVideoData } from '../utils/functions.js';
import Common from '../components/Common.js';
import Section from '../components/Section.js';

const commonSettings = new Common(commonData);

const videoList = new Section({
	data: videosData,
	renderer: (dataItem) => {
		addComponent(videoList, '#video-template', uploadVideoData, dataItem)
	}
}, '#videos-container');

commonSettings.setEventListeners();
videoList.renderItems();
