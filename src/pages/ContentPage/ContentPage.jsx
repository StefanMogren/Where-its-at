import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import TicketsPage from '../TicketsPage/TicketsPage';
import Footer from '../../components/Footer/Footer';

import useEventStore from '../../stores/useEventStore';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import { useEffect } from 'react';

// Ska använda Swiper för att hoppa mellan HomePage, EventsPage och TicketsPage

function ContentPage() {
	const { events: eventsAPI, isLoading, isError } = useFetchEvents();

	const { events, setEvents } = useEventStore();

	useEffect(() => {
		if (events.length === 0 && eventsAPI.length > 0) {
			setEvents(eventsAPI);
		}
	}, [eventsAPI]);

	console.log(events);

	return (
		<>
			{/* <HomePage /> */}
			{events && <EventsPage events={events} />}
			<Footer />
		</>
	);
}

export default ContentPage;
