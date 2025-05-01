import './ticketCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import useEventStore from '../../stores/useEventStore';

function TicketCounter({ amount, id, children }) {
	const { increaseEventAmount, decreaseEventAmount } = useEventStore();

	return (
		<section className='counter'>
			{/* --- Infon från föräldern --- */}
			<div className='counter__info'>{children}</div>

			{/* --- Plus, antal, minus --- */}
			<button
				className='counter__btn'
				onClick={() => decreaseEventAmount(id)}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<span className='counter__amount'>{amount}</span>
			<button
				className='counter__btn'
				onClick={() => increaseEventAmount(id)}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</section>
	);
}

export default TicketCounter;
