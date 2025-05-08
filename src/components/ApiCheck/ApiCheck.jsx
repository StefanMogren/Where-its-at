import useApiCheckStore from '../../stores/useApiCheckStore';
import useEventStore from '../../stores/useEventStore';
import './apiCheck.css';

function ApiCheck() {
	const { isLoading, isError } = useApiCheckStore();
	const { events } = useEventStore();

	if (isLoading) {
		return <h2 className='api-message'>Hämtar events...</h2>;
	} else if (isError) {
		return (
			<h2 className='api-message'>
				Aj då. Det blev ett fel med hämtningen av events. <br />
				Försök igen senare.
			</h2>
		);
	} else if (events.length === 0) {
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
