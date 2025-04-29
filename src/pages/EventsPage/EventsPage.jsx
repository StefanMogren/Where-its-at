import EventItem from '../../components/EventItem/EventItem';
import './eventsPage.css';

function EventsPage() {
	return (
		<main className='events-page'>
			<h1>Events</h1>
			<input
				className='events-page__search'
				type='search'
				name='eventSearch'
				id='eventSearch'
			/>
			<ul className='events-page__event-container'>
				<EventItem />
			</ul>
		</main>
	);
}

export default EventsPage;
