import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router/Router';
import './index.css';

// Hämtar och registrerar Swiper i appen så Swiper kan användas globalt
import { register } from 'swiper/element/bundle';
register();

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router />
	</StrictMode>
);
