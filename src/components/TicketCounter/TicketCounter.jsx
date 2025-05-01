import React from 'react';
import './ticketCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function TicketCounter({ amount, children }) {
	return (
		<section className='counter'>
			<div className='counter__info'>{children}</div>
			<button className='counter__btn'>
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<span className='counter__amount'>{amount}</span>
			<button className='counter__btn'>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</section>
	);
}

export default TicketCounter;
