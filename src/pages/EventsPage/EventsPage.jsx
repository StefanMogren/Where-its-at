import EventItem from '../../components/EventItem/EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './eventsPage.css';
import useEventStore from '../../stores/useEventStore';
import Basket from '../../components/Basket/Basket';
import ApiCheck from '../../components/ApiCheck/ApiCheck';
import useApiCheckStore from '../../stores/useApiCheckStore';

function EventsPage() {
	const { events } = useEventStore();
	const { isLoading, isError } = useApiCheckStore();

	/* const apiCheck = () => {
		if (isLoading) {
			return <h2 className='api-message'>Hämtar events...</h2>;
		} else if (isError) {
			return (
				<h2 className='api-message'>
					Aj då. Det blev ett fel med hämtningen av events. Försök
					igen senare.
				</h2>
			);
		} else if (events.length === 0) {
			return (
				<h2 className='api-message'>
					Inga events finns tillgängliga just nu. Kom gärna igen och
					se
				</h2>
			);
		} else {
			return false;
		}
	}; */

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

				{/* --- Kontroll ifall laddningen av API:et laddas eller har misslyckats --- */}
				{isLoading || isError ? (
					<ApiCheck />
				) : (
					/* --- Listan med events --- */
					<ul className='events-page__event-container'>
						{events.map((event) => (
							<EventItem event={event} key={event.id} />
						))}
					</ul>
				)}
			</main>
		</section>
	);
}

export default EventsPage;
