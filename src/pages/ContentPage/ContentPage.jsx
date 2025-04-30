import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import TicketsPage from '../TicketsPage/TicketsPage';
import Footer from '../../components/Footer/Footer';

import useEventStore from '../../stores/useEventStore';
import { useFetchEvents } from '../../hooks/useFetchEvents';
import { useEffect } from 'react';

// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ContentPage() {
	const { events: eventsAPI, isLoading, isError } = useFetchEvents();

	const { events, setEvents } = useEventStore();

	useEffect(() => {
		if (events.length === 0 && eventsAPI.length > 0) {
			setEvents(eventsAPI);
		}
	}, [eventsAPI]);
	console.log(events);

	return (
		<>
			<Swiper
				pagination={true}
				modules={[Pagination]}
				className='mySwiper'>
				<SwiperSlide>
					{/* <HomePage /> */}
					Slide 1
				</SwiperSlide>
				<SwiperSlide>Slide 2{/* <EventsPage /> */}</SwiperSlide>
			</Swiper>
			<Footer />
		</>
	);
}

export default ContentPage;
