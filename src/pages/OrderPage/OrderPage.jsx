import './orderPage.css';
import useEventStore from '../../stores/useEventStore';
import useTicketStore from '../../stores/useTicketStore';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import TimeFromTo from '../../components/TimeFromTo/TimeFromTo';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';

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
	// Sätter alla events amount till 0 i useEventStore.
	const purchaseTickets = () => {
		events.forEach((event) => {
			if (event.amount > 0) {
				addTicket(event);
			}
		});
		emptyAllEventAmount();
	};
	console.log(tickets);

	return (
		<section className='wrapper'>
			<main className='order-page'>
				<h1 className='order-page__title'>Order</h1>

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
									{event.when.date}{' '}
									<TimeFromTo
										from={event.when.from}
										to={event.when.to}
									/>
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
