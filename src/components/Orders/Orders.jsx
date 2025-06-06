import useEventStore from '../../stores/useEventStore';
import useTicketStore from '../../stores/useTicketStore';
import Button from '../../components/Button/Button';
import generateTicketID from '../../utils/generateTicketID';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import Date from '../../components/Date/Date';
import Time from '../Time/Time';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Orders() {
	// --- useEventStore ---
	// Innehåller eventdatan från API:et
	const {
		events,
		increaseEventAmount,
		decreaseEventAmount,
		emptyAllEventAmount,
	} = useEventStore();

	// --- useTicketStore ---
	// Innehåller datan för biljetterna som användaren köpt
	const { addTicket } = useTicketStore();

	const [totalCost, setTotalCost] = useState(0);

	// Uppdaterar den totala kostnaden varje gång events uppdateras
	useEffect(() => {
		let totalCost = 0;
		events.forEach((event) => {
			totalCost += event.amount * event.price;
		});
		setTotalCost(totalCost);
	}, [events]);

	// Går igenom varje event med amount > 0
	// Skapar biljetter till useTicketStore baserat på amount för varje event
	// Ger varje biljett en slumpmässig sektion, säte och ID
	const navigate = useNavigate();
	const purchaseTickets = () => {
		events.forEach((event) => {
			if (event.amount > 0) {
				// Slumpmässig sektion
				const letterIndex = Math.floor(Math.random() * 26) + 65;
				const randomSection = String.fromCharCode(letterIndex);

				// Slumpmässigt säte
				const randomSeat = Math.floor(Math.random() * 300) + 1;
				for (let i = 0; i < event.amount; i++) {
					const seat = randomSeat + i;

					// Skapar biljett till useTicketStore
					addTicket(event, randomSection, seat, generateTicketID());
				}
			}
		});

		// Sätt alla amount i useEventStore till 0
		emptyAllEventAmount();

		// Gå till /tickets sidan
		const path = '/tickets';
		navigate(path);
	};

	return (
		<>
			{/* --- Varje event med amount > 0 får en TicketCounter --- */}
			{events.map((event) => {
				if (event.amount > 0) {
					return (
						// --- TicketCounter, wrappar eventnamnet och datumet/tiden ---
						<TicketCounter
							key={event.id}
							amount={event.amount}
							increaseAmount={() => increaseEventAmount(event.id)}
							decreaseAmount={() =>
								decreaseEventAmount(event.id)
							}>
							{/* --- Eventnamnet --- */}
							<h2 className='order-page__event-title'>
								{event.name}
							</h2>

							{/* --- Datumet och tiden --- */}
							<p className='order-page__event-info'>
								<Date when={event.when.date} shorten={false} />
								{' kl '}
								<Time time={event.when.from} />
								{' - '}
								<Time time={event.when.to} />
							</p>
						</TicketCounter>
					);
				}
			})}

			<section className='order-page__summary'>
				Totalt värde på order
				{/* --- Totala kostnaden --- */}
				<span className='order-page__total-cost'>{totalCost} sek</span>
				{/* --- Skicka order-knappen --- */}
				<Button onClick={purchaseTickets}>Skicka order</Button>
			</section>
		</>
	);
}

export default Orders;
