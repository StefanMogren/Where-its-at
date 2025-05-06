import Date from '../Date/Date';
import Time from '../Time/Time';
import './ticket.css';

function Ticket({ ticket }) {
	const { name, where, when, section, seat, ticketID } = ticket;
	return (
		<article className='ticket'>
			{/* --- Eventets namn --- */}
			<section className='ticket__what'>
				<h2>WHAT</h2>
				<p className='ticket__title'>{name}</p>
			</section>

			{/* --- Platsen --- */}
			<section className='ticket__where'>
				<h2>WHERE</h2>
				<p>{where}</p>
			</section>

			<section className='ticket__date-time'>
				{/* --- Datumet --- */}
				<section className='ticket__when'>
					<h2>WHEN</h2>
					<p>
						<Date when={when.date} shorten={true} />
					</p>
				</section>

				{/* --- Tiden från --- */}
				<section className='ticket__from'>
					<h2>FROM</h2>
					<p>
						<Time time={when.from} />
					</p>
				</section>

				{/* --- Tiden till --- */}
				<section className='ticket__to'>
					<h2>TO</h2>
					<p>
						<Time time={when.to} />
					</p>
				</section>
			</section>

			{/* --- Sittplatsen --- */}
			<section className='ticket__info'>
				<h2>INFO</h2>
				<p>
					Section {section} - seat {seat}
				</p>
			</section>

			{/* --- Streckkod och biljettID --- */}
			<section className='ticket__identifier'>
				<h2 className='ticket__barcode'>{ticketID}</h2>
				<p className='ticket__id'>{ticketID}</p>
			</section>
		</article>
	);
}

export default Ticket;
