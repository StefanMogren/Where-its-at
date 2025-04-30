import './eventItem.css';
import TimeFromTo from '../TimeFromTo/TimeFromTo';
import Date from '../Date/Date';
import { Link } from 'react-router-dom';

function EventItem({ event }) {
	const {
		id,
		name,
		price,
		when: { date, from, to },
		where,
	} = event;

	return (
		<li>
			<Link className='event-item' to={`add-event/${id}`}>
				<div className='event-item__date'>
					<Date when={date} />
				</div>
				<section className='event-item__info'>
					<h2 className='event-item__title'>{name}</h2>
					<section className='event-item__details'>
						<div className='event-item__inner-details'>
							<p className='event-item__location'>{where}</p>
							<p className='event-item__time'>
								<TimeFromTo from={from} to={to} />
							</p>
						</div>
						<p className='event-item__price'>{price} sek</p>
					</section>
				</section>
			</Link>
		</li>
	);
}

export default EventItem;
