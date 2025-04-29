import React from 'react';
import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import TicketsPage from '../TicketsPage/TicketsPage';
import Footer from '../../components/Footer/Footer';

// Ska använda Swiper för att hoppa mellan HomePage, EventsPage och TicketsPage
function ContentPage() {
	return (
		<>
			{/* <HomePage /> */}
			<EventsPage />
			<Footer />
		</>
	);
}

export default ContentPage;
