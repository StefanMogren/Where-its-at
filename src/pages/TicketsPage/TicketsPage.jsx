import Ticket from '../../components/Ticket/Ticket';
import useTicketStore from '../../stores/useTicketStore';
import './ticketsPage.css';

function TicketsPage() {
	// --- useTicketStore ---
	// Innehåller datan för biljetterna som användaren köpt
	const { tickets } = useTicketStore();

	return (
		<section className='wrapper gradient'>
			<main className='tickets-page'>
				{/* --- Vertikal Swiper --- */}
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
							// --- Varje swiper-slide är en biljett ---
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
