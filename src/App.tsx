import { ThemeProvider } from '@mui/material';
import ComfyJS from 'comfy.js';
import { useEffect } from 'react';
import { Chat } from './components';
import { getTheme } from './theme';

function App() {
	useEffect(() => {
		ComfyJS.Init('alyxa_the_kitsune');
	}, []);

	return (
		<ThemeProvider theme={getTheme(undefined)}>
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
