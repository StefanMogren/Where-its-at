import { createBrowserRouter, Outlet } from 'react-router-dom';
import AddEventPage from '../pages/AddEventPage/AddEventPage';
import OrderPage from '../pages/OrderPage/OrderPage';

function Layout() {
	return (
		<section className='wrapper'>
			<Outlet />
		</section>
	);
}

export const Router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <h1>Insert 404 page here</h1>,
		children: [
			{
				path: '/',
				// Är den som innehåller swiper för de tre huvudsidorna
				element: <ContentPages />,
			},
			{
				path: '/add-event',
				element: <AddEventPage />,
			},
			{
				path: '/order',
				element: <OrderPage />,
			},
		],
	},
]);
