import { ThemeProvider } from '@mui/material';
import ComfyJS from 'comfy.js';
import { CSSProperties, useEffect } from 'react';
import { Chat } from './components';
import { useGetUrlParams } from './hooks';
import { getTheme } from './theme';

function App() {
	useEffect(() => {
		ComfyJS.Init('alyxa_the_kitsune');
	}, []);

	const { getUrlSelectedTheme, getUrlChatMode } = useGetUrlParams();
	let flexSettings: CSSProperties = {
		justifyContent: 'flex-end',
	};

	if (getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()) {
		flexSettings = {
			justifyContent: 'flex-start',
		};
	}

	return (
		<ThemeProvider theme={getTheme(getUrlSelectedTheme())}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: 'transparent',
					height: '100%',
					alignItems: 'flex-end',
					...flexSettings,
				}}
			>
				<Chat />
			</div>
		</ThemeProvider>
	);
}

export default App;
