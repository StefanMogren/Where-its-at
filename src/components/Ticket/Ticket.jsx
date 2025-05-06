import Date from '../Date/Date';
import './ticket.css';

function Ticket({ ticket }) {
	return (
		<article className='ticket'>
			{/* --- Eventets namn --- */}
			<section className='ticket__what'>
				<h2>WHAT</h2>
				<p className='ticket__title'>{ticket.name}</p>
			</section>

			{/* --- Platsen --- */}
			<section className='ticket__where'>
				<h2>WHERE</h2>
				<p>{ticket.where}</p>
			</section>

			<section className='ticket__date-time'>
				{/* --- Datumet --- */}
				<section className='ticket__when'>
					<h2>WHEN</h2>
					<p>
						<Date when={ticket.when.date} shorten={true} />
					</p>
				</section>

				{/* --- Tiden från --- */}
				<section className='ticket__from'>
					<h2>FROM</h2>
					<p>{ticket.when.from}</p>
				</section>

				{/* --- Tiden till --- */}
				<section className='ticket__to'>
					<h2>TO</h2>
					<p>{ticket.when.to}</p>
				</section>
			</section>

			{/* --- Sittplatsen --- */}
			<section className='ticket__info'>
				<h2>INFO</h2>
				<p>
					Section {ticket.section} - seat {ticket.seat}
				</p>
			</section>

			{/* --- Streckkod och biljettID --- */}
			<section className='ticket__identifier'>
				<h2 className='ticket__barcode'>{ticket.ticketID}</h2>
				<p className='ticket__id'>{ticket.ticketID}</p>
			</section>
		</article>
	);
}

export default Ticket;
