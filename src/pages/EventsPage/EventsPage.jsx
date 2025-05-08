import useEventStore from '../../stores/useEventStore';
import useApiCheckStore from '../../stores/useApiCheckStore';
import EventItem from '../../components/EventItem/EventItem';
import Basket from '../../components/Basket/Basket';
import ApiCheck from '../../components/ApiCheck/ApiCheck';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './eventsPage.css';

function EventsPage() {
	const { events } = useEventStore();
	const { isLoading, isError } = useApiCheckStore();

	const [searchInput, setSearchInput] = useState('');
	const [filteredEvents, setFilteredEvents] = useState('');

	// Funktionalitet för sökfältet.
	// Kollar vilka eventnamn som matchar sökimputen
	useEffect(() => {
		if (searchInput.length > 0) {
			setFilteredEvents(
				events.filter((event) =>
					event.name.toLowerCase().includes(searchInput.toLowerCase())
				)
			);
		} else if (searchInput.length === 0) {
			setFilteredEvents(events);
		}
	}, [events, searchInput]);

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
					<input
						type='search'
						name='eventSearch'
						id='eventSearch'
						onChange={(input) => setSearchInput(input.target.value)}
					/>
				</label>

				{/* --- Kontroll ifall laddningen av API:et laddas eller har misslyckats --- */}
				{isLoading || isError ? (
					<ApiCheck />
				) : (
					/* --- Listan med events --- */
					<ul className='events-page__event-container'>
						{filteredEvents &&
							filteredEvents.map((event) => (
								<EventItem event={event} key={event.id} />
							))}
					</ul>
				)}
			</main>
		</section>
	);
}

export default EventsPage;
