import './orderPage.css';
import useEventStore from '../../stores/useEventStore';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import TimeFromTo from '../../components/TimeFromTo/TimeFromTo';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';

function OrderPage() {
	const { events, increaseEventAmount, decreaseEventAmount } =
		useEventStore();

	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		setTotalCost(0);
		events.forEach((event) => {
			setTotalCost((prevTotal) => prevTotal + event.amount * event.price);
		});
	}, [events]);

	return (
		<section className='wrapper'>
			<main className='order-page'>
				<h1 className='order-page__title'>Order</h1>

				{/* --- Varje event med amount > 0 får en TicketCounter */}
				{events.map((event) => {
					if (event.amount > 0) {
						return (
							<TicketCounter
								key={event.id}
								amount={event.amount}
								increaseAmount={() =>
									increaseEventAmount(event.id)
								}
								decreaseAmount={() =>
									decreaseEventAmount(event.id)
								}>
								{/* --- Eventnamnet --- */}
								<h2 className='order-page__event-title'>
									{event.name}
								</h2>

								{/* --- Datumet och tiden */}
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
					<Button>Skicka order</Button>
				</section>
			</main>
		</section>
	);
}

export default OrderPage;
