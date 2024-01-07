import { image } from './image';
import { icons } from './icons';
import { Anything } from '../types';
import { badges } from './badges';

interface Assets {
	borders?: string;
	icons?: {
		mod?: string;
		subscriber?: string;
		chatters?: string;
	};
	badges?: {
		mod?: string;
		artist?: string;
	};
}

export const GetAssets = (selectedTheme: Anything): Assets | undefined => {
	switch (selectedTheme) {
		case 'H': {
			return {
				borders: image.borders.halloweenBorder,
				icons: { mod: icons.halloween.ghost, subscriber: icons.halloween.pumpkin },
			};
		}
		case 'C': {
			return {
				borders: image.borders.christmasBorderAlter,
				icons: {
					mod: icons.christmas.christmasTree,
					subscriber: icons.christmas.gingerBreadMan,
					chatters: icons.christmas.greenPresent,
				},
			};
		}
		case 'D':
		default: {
			return {
				badges: {
					...badges,
				},
			};
		}
	}
};
