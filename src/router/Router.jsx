import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddEventPage from '../pages/AddEventPage/AddEventPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import SwiperWrapper from './SwiperWrapper';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import { useEffect } from 'react';
import useEventStore from '../stores/useEventStore';
import useApiCheckStore from '../stores/useApiCheckStore';
import { useFetchEvents } from '../hooks/useFetchEvents';

export const Router = () => {
	// --- useFetchEvent ---
	// Saker för att hämta Eventdata från API
	const { events: eventsAPI, isLoading, isError } = useFetchEvents();

	// --- useApiCheckStore ---
	// Kontroll för ifall API:et laddas eller misslyckas
	const { setIsLoading, setIsError } = useApiCheckStore();
	useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);

	useEffect(() => {
		setIsError(isError);
		if (isError) {
			console.log(isError);
		}
	}, [isError]);

	// Kontroll för att lägga till API:ets events i sidans useEventStore bara ifall API:ets event är färdighämtade samt att de inte redan är tillagda.
	const { events, addNewEvent } = useEventStore();
	useEffect(() => {
		if (events.length === 0 && eventsAPI.length > 0) {
			eventsAPI.forEach((event) => addNewEvent(event));
		}
	}, [eventsAPI]);

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
