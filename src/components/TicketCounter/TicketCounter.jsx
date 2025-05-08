import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ticketCounter.css';

function TicketCounter({ amount, increaseAmount, decreaseAmount, children }) {
	const decrease = () => {
		if (amount > 0) {
			decreaseAmount((prevAmount) => prevAmount - 1);
		}
	};
	const increase = () => {
		increaseAmount((prevAmount) => prevAmount + 1);
	};

	return (
		<section className='counter'>
			{/* --- Infon från föräldern --- */}
			<div className='counter__info'>{children}</div>

			{/* --- Plus, antal, minus --- */}
			<button className='counter__btn' onClick={() => decrease()}>
				<FontAwesomeIcon icon={faMinus} />
			</button>

			{/* --- Antalet biljetter --- */}
			<span className='counter__amount'>{amount}</span>
			<button className='counter__btn' onClick={() => increase()}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</section>
	);
}

export default TicketCounter;
