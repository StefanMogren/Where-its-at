import './addEventPage.css';
import useEventStore from '../../stores/useEventStore';
import { useParams } from 'react-router-dom';
import TimeFromTo from '../../components/TimeFromTo/TimeFromTo';
import TicketCounter from '../../components/TicketCounter/TicketCounter';

function AddEventPage() {
	const { events } = useEventStore();
	const { id } = useParams();
	console.log('useParams id är ' + id);
	console.log('events innan currentEvent är');
	console.log(events);

	const currentEvent = events.find((event) => event.id === id);

	const {
		name,
		price,
		amount,
		when: { date, from, to },
		where,
	} = currentEvent;

	return (
		<section className='wrapper'>
			<main className='add-event-page'>
				{/* --- Sidinfo --- */}
				<h1 className='add-event-page__title'>Event</h1>
				<p className='add-event-page__subtitle'>
					You are about to score some tickets to
				</p>

				{/* --- Eventinfo --- */}
				<section className='add-event-page__info'>
					<h2 className='add-event-page__event-title'>{name}</h2>
					<p className='add-event-page__date'>
						{date} kl {<TimeFromTo from={from} to={to} />}
					</p>
					<p className='add-event-page__location'>@ {where}</p>
				</section>

				{/* --- Räknaren, pris, antal --- */}
				<TicketCounter amount={amount} id={id}>
					<h2 className='add-event-page__cost'>
						{amount * price} sek
					</h2>
				</TicketCounter>
			</main>
		</section>
	);
}

export default AddEventPage;
