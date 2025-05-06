import Ticket from '../../components/Ticket/Ticket';
import './ticketsPage.css';
import useTicketStore from '../../stores/useTicketStore';

// import 'swiper/css/bundle';

function TicketsPage() {
	const { tickets } = useTicketStore();
	console.log('Tickets are');

	console.log(tickets);

	return (
		<section className='wrapper gradient'>
			<main className='tickets-page'>
				<swiper-container
					grab-cursor='true'
					effect='cards'
					direction='vertical'
					cards-effect='{
						"perSlideOffset": 8,
						"rotate": false

					}'
					className='mySwiper'>
					{tickets.map((ticket) => {
						return (
							<swiper-slide key={ticket.ticketID}>
								<Ticket ticket={ticket} />
							</swiper-slide>
						);
					})}
				</swiper-container>
			</main>
		</section>
	);
}

export default TicketsPage;
