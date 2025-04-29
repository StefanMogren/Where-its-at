import { create } from 'zustand';

const useTicketStore = create((set) => ({
	tickets: [],
	addTicket: (ticket) => {
		set((state) => ({
			tickets: [...state.tickets, ticket],
		}));
	},
}));

export default useTicketStore;
