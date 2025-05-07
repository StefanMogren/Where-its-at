import './orderPage.css';
import useEventStore from '../../stores/useEventStore';

import NavigateBack from '../../components/NavigateBack/NavigateBack';
import Orders from '../../components/Orders/Orders';

function OrderPage() {
	const { events } = useEventStore();

	return (
		<section className='wrapper'>
			<main className='order-page'>
				<header>
					<NavigateBack />
					<h1 className='order-page__title'>Order</h1>
				</header>

				{/* --- Varje event med amount > 0 får en TicketCounter */}
				{events.find((event) => event.amount > 0) ? (
					<Orders />
				) : (
					<h2 className='order-page__no-orders'>
						Du har ännu inga biljetter att köpa
					</h2>
				)}
			</main>
		</section>
	);
}

export default OrderPage;
