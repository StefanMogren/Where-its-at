import Ticket from '../../components/Ticket/Ticket';
import './ticketsPage.css';
import useTicketStore from '../../stores/useTicketStore';

function TicketsPage() {
	const { tickets } = useTicketStore();
	console.log('Tickets are');

	console.log(tickets);

	return (
		<section className='wrapper gradient'>
			<main className='tickets-page'>
				{tickets.map((event) => {
					const adjacentSeats = [];
					for (let i = 0; i < event.amount; i++) {
						const seat = event.seat + i;
						adjacentSeats.push(
							<Ticket
								event={event}
								seat={seat}
								key={event.section + seat}
							/>
						);
					}
					return adjacentSeats;
				})}
			</main>
		</section>
	);
}

export default TicketsPage;
