import useEventStore from '../../stores/useEventStore';
import Time from '../../components/Time/Time';
import Button from '../../components/Button/Button';
import Basket from '../../components/Basket/Basket';
import Date from '../../components/Date/Date';
import NavigateBack from '../../components/NavigateBack/NavigateBack';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import './addEventPage.css';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import useApiCheckStore from '../../stores/useApiCheckStore';

function AddEventPage() {
	const { events, addNewEvent, addEventAmount } = useEventStore();
	const { id } = useParams();
	const [addedToBasketMsg, setAddedToBasketMsg] = useState(false);

	const { events: eventsAPI, isLoading, isError } = useFetchEvents();
	const [currentEvent, setCurrentEvent] = useState(null);

	useEffect(() => {
		if (events.length === 0 && eventsAPI.length > 0) {
			eventsAPI.forEach((event) => addNewEvent(event));
		}
	}, [eventsAPI]);

	useEffect(() => {
		if (events.length > 0) {
			setCurrentEvent(events.find((event) => event.id === id));
		}
	}, [events]);

	const { name, price, when, where } = currentEvent ?? {};

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
				<header className='add-event-page__header'>
					<NavigateBack />
					<h1 className='add-event-page__title'>Event</h1>
					<Basket />
				</header>
				<p className='add-event-page__subtitle'>
					You are about to score some tickets to
				</p>

				{/* --- Eventdetaljer --- */}
				{currentEvent && (
					<>
						<section className='add-event-page__info'>
							<h2 className='add-event-page__event-title'>
								{name}
							</h2>
							<p className='add-event-page__date'>
								<Date when={when.date} shorten={false} />
								{' kl '}
								<Time time={when.from} />
								{' - '}
								<Time time={when.to} />
							</p>
							<p className='add-event-page__location'>
								@ {where}
							</p>
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
						<Button onClick={() => addToBasket()}>
							Lägg i varukorgen
						</Button>
					</>
				)}
			</main>
		</section>
	);
}

export default AddEventPage;
