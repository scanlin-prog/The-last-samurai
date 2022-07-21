import {
	overlayAwards,
	commonData,
} from '../utils/constants.js';
import Common from '../components/Common.js';
import OverlayAwards from '../components/OverlayAwards.js';

const commonSettings = new Common(commonData);
const awards = new OverlayAwards(overlayAwards);

commonSettings.setEventListeners();
awards.setOptions();