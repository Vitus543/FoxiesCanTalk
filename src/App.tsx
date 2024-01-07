import { ThemeProvider } from '@mui/material';
import ComfyJS from 'comfy.js';
import { useEffect } from 'react';
import { Chat } from './components';
import { getTheme } from './theme';

function App() {
	useEffect(() => {
		ComfyJS.Init('alyxa_the_kitsune');
	}, []);

	const url = new URL(window.location.href);
	const selectedTheme = url.searchParams.get('theme');

	return (
		<ThemeProvider theme={getTheme(selectedTheme)}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					flexDirection: 'column',
					alignItems: 'flex-end',
					backgroundColor: 'transparent',
					height: '100%',
				}}
			>
				<Chat />
			</div>
		</ThemeProvider>
	);
}

export default App;
