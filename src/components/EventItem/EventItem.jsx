import React from 'react';
import './eventItem.css';
import TimeFromTo from '../TimeFromTo/TimeFromTo';

function EventItem({ event }) {
	const { id, name, price, when, where } = event;
	return (
		<li className='event-item'>
			<time>{when.date}</time>
			<section>
				<div>
					<h2>{name}</h2>
					<p>{where}</p>
					<p>
						<TimeFromTo from={when.from} to={when.to} />
					</p>
				</div>
				<p>{price} sek</p>
			</section>
		</li>
	);
}

export default EventItem;
