import useEventStore from '../../stores/useEventStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './basket.css';

function Basket() {
	// --- useEventStore ---
	// Innehåller eventdatan från API:et
	const { events } = useEventStore();
	const [totalAmount, setTotalAmount] = useState(0);

	// Kollar igenom alla event.amount för att räkna totalt antal
	// Uppdaterar antalet som visas ovanpå biljett-ikonen
	useEffect(() => {
		setTotalAmount(0);
		events.forEach((event) => {
			setTotalAmount((prevAmount) => prevAmount + event.amount);
		});
	}, [events]);

	// Navigerar användaren till "/order" sidan
	const navigate = useNavigate();
	const goToOrderPage = () => {
		const path = '/order';
		navigate(path);
	};

	return (
		<button className='basket' onClick={goToOrderPage}>
			{/* --- Biljettikon --- */}
			<FontAwesomeIcon icon={faTicket} style={{ color: `var(--pink)` }} />

			{/* --- Antalet ovanpå ikonen --- */}
			{totalAmount > 0 ? (
				<span className='basket__count'>{totalAmount}</span>
			) : (
				''
			)}
		</button>
	);
}

export default Basket;
