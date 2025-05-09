import useEventStore from '../../stores/useEventStore';

import NavigateBack from '../../components/NavigateBack/NavigateBack';
import Orders from '../../components/Orders/Orders';
import './orderPage.css';

function OrderPage() {
	// --- useEventStore ---
	// Innehåller eventdatan från API:et
	const { events } = useEventStore();

	return (
		<section className='wrapper'>
			<main className='order-page'>
				<header>
					{/* --- Ikon, navigera tillbaka --- */}
					<NavigateBack />

					{/* --- Sidtitel --- */}
					<h1 className='order-page__title'>Order</h1>
				</header>

				{/* --- Kontrollerar ifall det finns något event med amount > 0 --- */}
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
