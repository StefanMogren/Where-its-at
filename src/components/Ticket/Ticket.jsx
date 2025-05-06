import Date from '../Date/Date';
import './ticket.css';
import randLargeLetter from '../../utils/randLargeLetter';
import randNumber from '../../utils/randNumber';

function Ticket({ event, seat }) {
	// Får fram en slumpmässig kombination av siffror och stora bokstäver för biljettID
	let ticketID = '#';
	for (let i = 0; i < 5; i++) {
		const letterOrNumber = Math.random();
		console.log(letterOrNumber);

		if (letterOrNumber > 0.5) {
			ticketID += randLargeLetter();
		} else {
			ticketID += randNumber();
		}
	}

	return (
		<article className='ticket'>
			{/* --- Eventets namn --- */}
			<section className='ticket__what'>
				<h2>WHAT</h2>
				<p className='ticket__title'>{event.name}</p>
			</section>

			{/* --- Platsen --- */}
			<section className='ticket__where'>
				<h2>WHERE</h2>
				<p>{event.where}</p>
			</section>

			<section className='ticket__date-time'>
				{/* --- Datumet --- */}
				<section className='ticket__when'>
					<h2>WHEN</h2>
					<p>
						<Date when={event.when.date} shorten={true} />
					</p>
				</section>

				{/* --- Tiden från --- */}
				<section className='ticket__from'>
					<h2>FROM</h2>
					<p>{event.when.from}</p>
				</section>

				{/* --- Tiden till --- */}
				<section className='ticket__to'>
					<h2>TO</h2>
					<p>{event.when.to}</p>
				</section>
			</section>

			{/* --- Sittplatsen --- */}
			<section className='ticket__info'>
				<h2>INFO</h2>
				<p>
					Section {event.section} - seat {seat}{' '}
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
