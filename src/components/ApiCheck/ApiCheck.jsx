import useApiCheckStore from '../../stores/useApiCheckStore';
import useEventStore from '../../stores/useEventStore';
import './apiCheck.css';

function ApiCheck() {
	// --- useApiCheckStore ---
	// Kontrollerna för ifall hämtningen av API:et fortfarande görs eller misslyckades.
	const { isLoading, isError } = useApiCheckStore();

	// --- useEventStore ---
	// Innehåller eventdatan från API:et
	const { events } = useEventStore();

	if (isLoading) {
		// Om API:et fortfarande laddas
		return <h2 className='api-message'>Hämtar events...</h2>;
	} else if (isError) {
		// Om det blivit en error när API:et skulle hämtas
		return (
			<h2 className='api-message'>
				Aj då. Det blev ett fel med hämtningen av events. <br />
				Försök igen senare.
			</h2>
		);
	} else if (events.length === 0) {
		// Om API:et visar sig vara tomt, dvs. inga events.
		return (
			<h2 className='api-message'>
				Inga events finns tillgängliga just nu. Kom gärna tillbaka och
				kolla igen vid ett senare tillfälle.
			</h2>
		);
	} else {
		return false;
	}
}

export default ApiCheck;
