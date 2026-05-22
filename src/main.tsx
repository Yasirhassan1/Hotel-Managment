import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root not found');
}

const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
