import EventItem from '../../components/EventItem/EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './eventsPage.css';
import useEventStore from '../../stores/useEventStore';

function EventsPage() {
	const { events, setEvents } = useEventStore();

	return (
		<main className='events-page'>
			<h1 className='events-page__title'>Events</h1>
			<label className='events-page__search' htmlFor='eventSearch'>
				<FontAwesomeIcon
					className='events-page__icon'
					icon={faMagnifyingGlass}
					style={{ color: '#FFFFFF33' }}
					size='xl'
				/>
				<input type='search' name='eventSearch' id='eventSearch' />
			</label>

			<ul className='events-page__event-container'>
				{events.map((event) => (
					<EventItem event={event} key={event.id} />
				))}
			</ul>
		</main>
	);
}

export default EventsPage;
