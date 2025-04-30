import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'swiper/css';

import HomePage from '../pages/HomePage/HomePage';
import EventsPage from '../pages/EventsPage/EventsPage';
import TicketsPage from '../pages/TicketsPage/TicketsPage';

const routeToIndex = {
	'/home': 0,
	'/events': 1,
	'/tickets': 2,
};

const indexToRoute = {
	0: '/home',
	1: '/events',
	2: '/tickets',
};

const SwiperWrapper = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const swiperRef = useRef(null);

	// Ser till så Swiper visar rätt sida när URL ändras
	// Fast bara för de tre sidor som Swiper "känner till".
	useEffect(() => {
		const index = routeToIndex[location.pathname];
		if (swiperRef.current && typeof index === 'number') {
			swiperRef.current.slideTo(index);
		}
	}, [location.pathname]);

	// Ser till så URL blir rätt när Swiper går från en sida till en annan
	const handleSlideChange = (swiper) => {
		const newRoute = indexToRoute[swiper.activeIndex];
		if (location.pathname !== newRoute) {
			navigate(newRoute, { replace: true });
		}
	};

	return (
		<Swiper
			onSwiper={(swiper) => (swiperRef.current = swiper)}
			onSlideChange={handleSlideChange}
			allowTouchMove={true}>
			<SwiperSlide>
				<HomePage />
			</SwiperSlide>

			<SwiperSlide>
				<EventsPage />
			</SwiperSlide>

			<SwiperSlide>
				<TicketsPage />
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperWrapper;
