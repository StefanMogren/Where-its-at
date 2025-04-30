import EventItem from '../../components/EventItem/EventItem';
import './eventsPage.css';
import useEventStore from '../../stores/useEventStore';

function EventsPage() {
	const { events, setEvents } = useEventStore();

	return (
		<main className='events-page'>
			<h1 className='events-page__title'>Events</h1>
			<input
				className='events-page__search'
				type='search'
				name='eventSearch'
				id='eventSearch'
			/>
			<ul className='events-page__event-container'>
				{events.map((event) => (
					<EventItem event={event} key={event.id} />
				))}
			</ul>
		</main>
	);
}

export default EventsPage;
