import Ticket from '../../components/Ticket/Ticket';
import './ticketsPage.css';
import useTicketStore from '../../stores/useTicketStore';

function TicketsPage() {
	const { tickets, addTicket } = useTicketStore();
	return (
		<section className='wrapper gradient'>
			<main className='tickets-page'>
				{tickets.map((event) => {
					return <Ticket event={event} />;
				})}
			</main>
		</section>
	);
}

export default TicketsPage;
