import ghost from './halloween/ghost.png';
import pumpkin from './halloween/pumpkin.png';

import christmasTree from './christmas/christmasTree.png';
import gingerBreadMan from './christmas/gingerBreadMan.png';
import greenPresent from './christmas/greenPresent.png';

const iconsHalloween = {
	ghost,
	pumpkin,
};

const iconsChistmas = {
	christmasTree,
	gingerBreadMan,
	greenPresent,
};

export const icons = {
	halloween: {
		...iconsHalloween,
	},
	chistmas: {
		...iconsChistmas,
	},
};
