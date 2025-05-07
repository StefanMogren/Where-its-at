import EventItem from '../../components/EventItem/EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './eventsPage.css';
import useEventStore from '../../stores/useEventStore';
import Basket from '../../components/Basket/Basket';

function EventsPage() {
	const { events } = useEventStore();

	return (
		<section className='wrapper'>
			<main className='events-page'>
				{/* --- biljettikonen som varukorg --- */}
				<header>
					<h1 className='events-page__title'>Events</h1>
					<Basket />
				</header>

				{/* --- Sökfältet --- */}
				<label className='events-page__search' htmlFor='eventSearch'>
					<FontAwesomeIcon
						className='events-page__icon'
						icon={faMagnifyingGlass}
						style={{ color: '#FFFFFF33' }}
						size='xl'
					/>
					<input type='search' name='eventSearch' id='eventSearch' />
				</label>

				{/* ---Listan med events --- */}
				<ul className='events-page__event-container'>
					{events.map((event) => (
						<EventItem event={event} key={event.id} />
					))}
				</ul>
			</main>
		</section>
	);
}

export default EventsPage;
