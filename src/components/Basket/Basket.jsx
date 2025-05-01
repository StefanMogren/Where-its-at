import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import './basket.css';
import useEventStore from '../../stores/useEventStore';
import { useEffect, useState } from 'react';

function Basket() {
	const { events } = useEventStore();
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(0);
		events.forEach((event) => {
			setTotalAmount((prevAmount) => prevAmount + event.amount);
		});
	}, [events]);

	return (
		<button
			className='basket'
			onClick={() => console.log('Basket ticket is clicked!')}>
			<FontAwesomeIcon
				icon={faTicket}
				style={{ color: `var(--pink)` }}
				// size='2xl'
			/>
			{totalAmount > 0 ? (
				<span className='basket__count'>{totalAmount}</span>
			) : (
				''
			)}
		</button>
	);
}

export default Basket;
