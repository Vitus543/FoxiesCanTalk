import { Helpers } from '../helper';

export const useGetUrlParams = () => {
	let url = new URL(window.location.href);

	const getUrlSelectedTheme = () => {
		const themeSession = Helpers.getSessionStorage<string>('theme');
		if (themeSession === undefined || themeSession === '' || themeSession !== url.searchParams.get('theme')) {
			const urlTheme = url.searchParams.get('theme');
			Helpers.saveSessionStorage('theme', urlTheme);
			return urlTheme;
		}
		return themeSession;
	};
	const getUrlChatMode = () => {
		const modeSession = Helpers.getSessionStorage<string>('mode');
		if (modeSession === undefined || modeSession === '' || modeSession !== url.searchParams.get('mode')) {
			const urlMode = url.searchParams.get('mode');
			Helpers.saveSessionStorage('mode', urlMode);
			return urlMode;
		}
		return modeSession;
	};

	return {
		getUrlSelectedTheme,
		getUrlChatMode,
	};
};
