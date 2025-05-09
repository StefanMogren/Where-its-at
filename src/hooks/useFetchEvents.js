import { useState, useEffect } from 'react';
import axios from 'axios';
import useEventStore from '../stores/useEventStore';

export const useFetchEvents = () => {
	const { events: eventStore } = useEventStore();
	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		if (eventStore.length === 0) {
			console.log('Axios is running!');

			axios
				.get('https://santosnr6.github.io/Data/events.json')
				.then((response) => setEvents(response.data.events))
				.catch((error) => setIsError(error))
				.finally(() => setIsLoading(false));
		}
	}, []);

	return { events, isLoading, isError };
};
