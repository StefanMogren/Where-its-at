import './eventItem.css';
import TimeFromTo from '../TimeFromTo/TimeFromTo';
import Date from '../Date/Date';

function EventItem({ event }) {
	const {
		id,
		name,
		price,
		when: { date, from, to },
		where,
	} = event;

	return (
		<li className='event-item'>
			<Date when={date} />
			<section>
				<div>
					<h2>{name}</h2>
					<p>{where}</p>
					<p>
						<TimeFromTo from={from} to={to} />
					</p>
				</div>
				<p>{price} sek</p>
			</section>
		</li>
	);
}

export default EventItem;
