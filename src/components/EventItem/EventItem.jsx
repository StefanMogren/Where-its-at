import Time from '../Time/Time';
import Date from '../Date/Date';
import { Link } from 'react-router-dom';
import './eventItem.css';

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
			{/* --- Varje EventItem länkar till /add-event sidan */}
			<Link className='event-item' to={`/add-event/${id}`}>
				{/* --- Datum --- */}
				<div className='event-item__date'>
					<Date when={date} shorten={true} />
				</div>

				<section className='event-item__info'>
					{/* --- Titel --- */}
					<h2 className='event-item__title'>{name}</h2>
					<section className='event-item__details'>
						<div className='event-item__inner-details'>
							{/* --- Plats --- */}
							<p className='event-item__location'>{where}</p>

							{/* --- Tid --- */}
							<p className='event-item__time'>
								<Time time={from} /> - <Time time={to} />
							</p>
						</div>

						{/* --- Pris --- */}
						<p className='event-item__price'>{price} sek</p>
					</section>
				</section>
			</Link>
		</li>
	);
}

export default EventItem;
