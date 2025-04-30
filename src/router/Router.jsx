import { createBrowserRouter, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddEventPage from '../pages/AddEventPage/AddEventPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ContentPage from '../pages/ContentPage/ContentPage';
import SwiperWrapper from './SwiperWrapper';

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
			</Routes>
		</BrowserRouter>
	);
};

/* function Layout() {
	return (
		<section className='wrapper'>
			<Outlet />
		</section>
	);
} */

/* export const Router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <h1>Insert 404 page here</h1>,
		children: [
			{
				path: '/',
				// Är den som innehåller swiper för de tre huvudsidorna
				element: <ContentPage />,
			},
			{
				path: '/add-event/:id',
				element: <AddEventPage />,
			},
			{
				path: '/order',
				element: <OrderPage />,
			},
		],
	},
]);
 */
