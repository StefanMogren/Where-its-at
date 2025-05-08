import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddEventPage from '../pages/AddEventPage/AddEventPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import SwiperWrapper from './SwiperWrapper';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* --- Swipersidor --- */}
				<Route path='/home' element={<SwiperWrapper />} />

				<Route path='/events' element={<SwiperWrapper />} />

				<Route path='/tickets' element={<SwiperWrapper />} />

				{/* --- React Routingsidor --- */}
				<Route path='/add-event/:id' element={<AddEventPage />} />

				<Route path='/order' element={<OrderPage />} />

				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};
