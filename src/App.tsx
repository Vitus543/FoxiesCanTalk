import ComfyJS from 'comfy.js';
import { useEffect } from 'react';
import { Chat } from './components';

function App() {
	useEffect(() => {
		ComfyJS.Init('alyxa_the_kitsune');
	}, []);

	return (
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
	);
}

export default App;
