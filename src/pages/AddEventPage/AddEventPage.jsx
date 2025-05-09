import useEventStore from '../../stores/useEventStore';
import Time from '../../components/Time/Time';
import Button from '../../components/Button/Button';
import Basket from '../../components/Basket/Basket';
import Date from '../../components/Date/Date';
import NavigateBack from '../../components/NavigateBack/NavigateBack';
import TicketCounter from '../../components/TicketCounter/TicketCounter';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import './addEventPage.css';
import useApiCheckStore from '../../stores/useApiCheckStore';
import ApiCheck from '../../components/ApiCheck/ApiCheck';

function AddEventPage() {
	const { events, addEventAmount } = useEventStore();
	const { id } = useParams();

	const { isLoading, isError } = useApiCheckStore();

	const [currentEvent, setCurrentEvent] = useState(null);

	// Letar upp eventet som matchar ID i adressfältet
	useEffect(() => {
		if (events.length > 0) {
			setCurrentEvent(events.find((event) => event.id === id));
		}
	}, [events]);

	const { name, price, when, where } = currentEvent ?? {};

	// Håller koll på antalet biljetter användaren är på väg att köpa
	const [numberOfTickets, setNumberOfTickets] = useState(1);

	// Kontroll för när animationen som poppar upp under varukorgen ska dyka upp.
	const [animateMsg, setAnimateMsg] = useState(false);

	// onClick-funktion för Button som lägger till antalet biljetter som användaren vill köpa i useEventStore.
	const addToBasket = () => {
		if (numberOfTickets > 0) {
			addEventAmount(id, numberOfTickets);
			setNumberOfTickets(0);

			// Animation för meddelandet som poppar upp under varukorgen.
			setAnimateMsg(true);
			setTimeout(() => {
				setAnimateMsg(false);
			}, 3000);
		}
	};

	return (
		<section className='wrapper'>
			<main className='add-event-page'>
				{/* --- Sidinfo --- */}
				<header className='add-event-page__header'>
					{/* --- Ikon, navigera tillbaka --- */}
					<NavigateBack />

					{/* --- Sidtitel --- */}
					<h1 className='add-event-page__title'>Event</h1>

					{/* --- Varukorgen --- */}
					<Basket />

					{/* --- Animation, meddelande att biljetter lagts i varukorg --- */}
					<AnimatePresence>
						{animateMsg && (
							<motion.div
								className='add-event-page__added-animation'
								key='box'
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0 }}>
								Tickets added to basket
								{/* --- Triangeln som pekar uppåt i meddelandet --- */}
								<div className='add-event-page__added-arrow'></div>
							</motion.div>
						)}
					</AnimatePresence>
				</header>

				{/* ---Kontroll ifall API:et laddas eller misslyckats --- */}
				{isLoading || isError ? (
					<ApiCheck />
				) : (
					<>
						<p className='add-event-page__subtitle'>
							You are about to score some tickets to
						</p>

						{/* --- Eventdetaljer --- */}
						{currentEvent ? (
							<>
								<section className='add-event-page__info'>
									{/* --- Eventnamn --- */}
									<h2 className='add-event-page__event-title'>
										{name}
									</h2>

									{/* --- Datum och tid --- */}
									<p className='add-event-page__date'>
										<Date
											when={when.date}
											shorten={false}
										/>
										{' kl '}
										<Time time={when.from} />
										{' - '}
										<Time time={when.to} />
									</p>

									{/* --- Plats --- */}
									<p className='add-event-page__location'>
										@ {where}
									</p>
								</section>

								{/* --- Räknaren, pris, antal --- */}
								<TicketCounter
									amount={numberOfTickets}
									increaseAmount={setNumberOfTickets}
									decreaseAmount={setNumberOfTickets}>
									{/* --- children inuti komponenten */}
									<h2 className='add-event-page__cost'>
										{numberOfTickets * price} sek
									</h2>
								</TicketCounter>

								{/* --- Lägg till-knappen --- */}
								<Button onClick={() => addToBasket()}>
									Lägg i varukorgen
								</Button>
							</>
						) : (
							// Errormeddelandet ifall ID i adressfältet inte stämmer med något event
							<section>
								<p>
									Hoppsan! Det här eventet verkar inte finnas
									i vårat register.
								</p>
							</section>
						)}
					</>
				)}
			</main>
		</section>
	);
}

export default AddEventPage;
