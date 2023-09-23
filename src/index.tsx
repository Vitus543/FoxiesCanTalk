import { createRoot } from 'react-dom/client';
// import './assets/fonts/font.css';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root') || document.createElement('root'));

export const ConnectApp = () => {
	return <App />;
};

const render = () => {
	root.render(<ConnectApp />);
};

render();
