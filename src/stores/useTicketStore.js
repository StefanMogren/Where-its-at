import { create } from 'zustand';

const useTicketStore = create((set) => ({
	tickets: [],
	addTicket: (ticket, randomSection, seat, ticketID) => {
		set((state) => ({
			tickets: [
				...state.tickets,
				{
					...ticket,
					section: randomSection,
					seat: seat,
					ticketID: ticketID,
				},
			],
		}));
	},
}));

export default useTicketStore;
