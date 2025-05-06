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
				{tickets.map((ticket) => {
					return <Ticket ticket={ticket} key={ticket.ticketID} />;
				})}
			</main>
		</section>
	);
}

export default TicketsPage;
