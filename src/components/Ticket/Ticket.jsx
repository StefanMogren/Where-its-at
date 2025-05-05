import Date from '../Date/Date';
import './ticket.css';

function Ticket({ event }) {
	const letterIndex = Math.floor(Math.random() * 26) + 65;
	const randomSection = String.fromCharCode(letterIndex);
	const randomSeat = Math.floor(Math.random() * 500) + 1;

	let adjacentSeats = [];
	for (let i = 0; i < event.amount; i++) {
		adjacentSeats.push(i);
	}
	console.log(adjacentSeats);

	return (
		<>
			{adjacentSeats.map((seat) => {
				return (
					<article className='ticket'>
						<section className='ticket__what'>
							<h2>WHAT</h2>
							<p className='ticket__title'>{event.name}</p>
						</section>

						<section className='ticket__where'>
							<h2>WHERE</h2>
							<p>{event.where}</p>
						</section>

						<section className='ticket__date-time'>
							<section className='ticket__when'>
								<h2>WHEN</h2>
								<p>
									<Date when={event.when.date} />
								</p>
							</section>
							<section className='ticket__from'>
								<h2>FROM</h2>
								<p>{event.when.from}</p>
							</section>
							<section className='ticket__to'>
								<h2>TO</h2>
								<p>{event.when.to}</p>
							</section>
						</section>

						<section className='ticket__info'>
							<h2>INFO</h2>
							<p>
								Section {randomSection} - seat{' '}
								{randomSeat + seat}{' '}
							</p>
						</section>

						<section className='ticket__identifier'>
							<h2 className='ticket__barcode'>#A2ED7</h2>
							<p className='ticket__id'>#A2ED7</p>
						</section>
					</article>
				);
			})}
		</>
	);
}

export default Ticket;
