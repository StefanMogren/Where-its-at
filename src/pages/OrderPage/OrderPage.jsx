import './orderPage.css';
import useEventStore from '../../stores/useEventStore';
import useTicketStore from '../../stores/useTicketStore';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import Time from '../../components/Time/Time';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Date from '../../components/Date/Date';
import generateTicketID from '../../utils/generateTicketID';
import NavigateBack from '../../components/NavigateBack/NavigateBack';

function OrderPage() {
	const {
		events,
		increaseEventAmount,
		decreaseEventAmount,
		emptyAllEventAmount,
	} = useEventStore();
	const { tickets, addTicket } = useTicketStore();

	// Lokal useState för den totala kostnaden.
	const [totalCost, setTotalCost] = useState(0);

	// Varje gång events från useEventStore uppdateras (när amount ändras) så sätts den totala kostnaden
	useEffect(() => {
		let totalCost = 0;
		events.forEach((event) => {
			totalCost += event.amount * event.price;
		});
		setTotalCost(totalCost);
	}, [events]);

	// Funktion för "Skicka order"-knappen
	// Skickar in alla events med amount > 0 till useTicketStore.
	// Ger varje ticket en slumpmässig sektion och säte att utgå från
	// Sätter alla useEventStore amount till 0.
	const navigate = useNavigate();
	const purchaseTickets = () => {
		events.forEach((event) => {
			if (event.amount > 0) {
				const letterIndex = Math.floor(Math.random() * 26) + 65;
				const randomSection = String.fromCharCode(letterIndex);

				const randomSeat = Math.floor(Math.random() * 500) + 1;
				for (let i = 0; i < event.amount; i++) {
					const seat = randomSeat + i;

					addTicket(event, randomSection, seat, generateTicketID());
				}
			}
		});

		//Töm useEventStore
		emptyAllEventAmount();

		// Gå till /tickets sidan
		const path = '/tickets';
		navigate(path);
	};
	console.log(tickets);

	return (
		<section className='wrapper'>
			<main className='order-page'>
				<header>
					<NavigateBack />
					<h1 className='order-page__title'>Order</h1>
				</header>

				{/* --- Varje event med amount > 0 får en TicketCounter */}
				{events.map((event) => {
					if (event.amount > 0) {
						return (
							// --- TicketCounter ---
							<TicketCounter
								key={event.id}
								amount={event.amount}
								increaseAmount={() =>
									increaseEventAmount(event.id)
								}
								decreaseAmount={() =>
									decreaseEventAmount(event.id)
								}>
								{/* --- Eventnamnet, wrappat av TicketCounter --- */}
								<h2 className='order-page__event-title'>
									{event.name}
								</h2>

								{/* --- Datumet och tiden, wrappat av TicketCounter */}
								<p className='order-page__event-info'>
									<Date
										when={event.when.date}
										shorten={false}
									/>
									{' kl '}
									<Time time={event.when.from} />
									{' - '}
									<Time time={event.when.to} />
								</p>
							</TicketCounter>
						);
					}
				})}

				{/* --- Totala kostnaden, skicka-knappen --- */}
				<section className='order-page__summary'>
					Totalt värde på order
					<span className='order-page__total-cost'>
						{totalCost} sek
					</span>
					<Button onClick={purchaseTickets}>Skicka order</Button>
				</section>
			</main>
		</section>
	);
}

export default OrderPage;
