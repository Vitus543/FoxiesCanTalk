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
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'transparent',
			}}
		>
			<Chat />
		</div>
	);
}

export default App;
