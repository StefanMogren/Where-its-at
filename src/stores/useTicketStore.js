import { create } from 'zustand';

const useTicketStore = create((set) => ({
	tickets: [],
	addTicket: (ticket, randomSection, randomSeat) => {
		set((state) => ({
			tickets: [
				...state.tickets,
				{ ...ticket, section: randomSection, seat: randomSeat },
			],
		}));
	},
}));

export default useTicketStore;
