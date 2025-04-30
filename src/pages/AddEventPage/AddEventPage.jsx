import './addEventPage.css';
import useEventStore from '../../stores/useEventStore';
import { useParams } from 'react-router-dom';

function AddEventPage() {
	const { events, setEvents } = useEventStore();
	const { id } = useParams();
	console.log('The id is ' + id);

	const currentEvent = events.find((event) => event.id === id);
	console.log(events);

	console.log(currentEvent);

	return (
		<main>
			<h1>Event</h1>
			<p>You are about to score some tickets to</p>
			<section>
				<h2>titel</h2>
				<p>dag kl tid</p>
				<p>plats</p>
			</section>
		</main>
	);
}

export default AddEventPage;
