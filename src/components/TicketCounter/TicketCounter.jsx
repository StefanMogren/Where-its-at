import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ticketCounter.css';

function TicketCounter({ amount, increaseAmount, decreaseAmount, children }) {
	// Räknare för att sänka antalet
	const decrease = () => {
		if (amount > 0) {
			decreaseAmount((prevAmount) => prevAmount - 1);
		}
	};

	// Räknare för att öka antalet
	const increase = () => {
		increaseAmount((prevAmount) => prevAmount + 1);
	};

	return (
		<section className='counter'>
			{/* --- Infon från föräldern --- */}
			<div className='counter__info'>{children}</div>

			{/* --- Minusknappen --- */}
			<button
				className='counter__btn'
				onClick={() => decrease()}
				aria-label='minska antal'>
				<FontAwesomeIcon icon={faMinus} aria-hidden='true' />
			</button>

			{/* --- Antalet biljetter --- */}
			<span className='counter__amount'>{amount}</span>

			{/* --- Plusknappen --- */}
			<button
				className='counter__btn'
				onClick={() => increase()}
				aria-label='öka antal'>
				<FontAwesomeIcon icon={faPlus} aria-hidden='true' />
			</button>
		</section>
	);
}

export default TicketCounter;
