import useEventStore from '../../stores/useEventStore';
import Time from '../../components/Time/Time';
import Button from '../../components/Button/Button';
import Basket from '../../components/Basket/Basket';
import Date from '../../components/Date/Date';
import NavigateBack from '../../components/NavigateBack/NavigateBack';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './addEventPage.css';
// import { number } from 'framer-motion';

function AddEventPage() {
	const { events, addEventAmount } = useEventStore();
	const { id } = useParams();

	const currentEvent = events.find((event) => event.id === id);

	const {
		name,
		price,
		when: { date, from, to },
		where,
	} = currentEvent;

	const [numberOfTickets, setNumberOfTickets] = useState(1);

	// onClick-funktionen som skickas in i Button
	const addToBasket = () => {
		addEventAmount(id, numberOfTickets);
		console.log(events);
		setNumberOfTickets(0);
	};

	return (
		<section className='wrapper'>
			<main className='add-event-page'>
				{/* --- Sidinfo --- */}
				<header>
					<NavigateBack />
					<h1 className='add-event-page__title'>Event</h1>
					<Basket />
				</header>
				<p className='add-event-page__subtitle'>
					You are about to score some tickets to
				</p>

				{/* --- Eventdetaljer --- */}
				<section className='add-event-page__info'>
					<h2 className='add-event-page__event-title'>{name}</h2>
					<p className='add-event-page__date'>
						<Date when={date} shorten={false} />
						{' kl '}
						<Time time={from} />
						{' - '}
						<Time time={to} />
					</p>
					<p className='add-event-page__location'>@ {where}</p>
				</section>

				{/* --- Räknaren, pris, antal --- */}
				<TicketCounter
					amount={numberOfTickets}
					increaseAmount={setNumberOfTickets}
					decreaseAmount={setNumberOfTickets}>
					{/* --- children inuti komponenten */}
					<h2 className='add-event-page__cost'>
						{numberOfTickets * price} sek
					</h2>
				</TicketCounter>

				{/* --- Lägg till-knappen --- */}
				<Button onClick={() => addToBasket()}>Lägg i varukorgen</Button>
			</main>
		</section>
	);
}

export default AddEventPage;
