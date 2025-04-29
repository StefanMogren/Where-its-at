import React from 'react';
import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import TicketsPage from '../TicketsPage/TicketsPage';
import Footer from '../../components/Footer/Footer';

import useEventStore from '../../stores/useEventStore';
import { useFetchEvents } from '../../hooks/useFetchEvents';

// Ska använda Swiper för att hoppa mellan HomePage, EventsPage och TicketsPage
function ContentPage() {
	const { events, isLoading, isError } = useFetchEvents();

	console.log(events);
	return (
		<>
			{/* <HomePage /> */}
			<EventsPage />
			<Footer />
		</>
	);
}

export default ContentPage;
