import { create } from 'zustand';

const useEventStore = create((set) => ({
	events: [],
	setEvents: (newEvents) => {
		set({ events: newEvents });
	},
	addNewEvent: (newEvent) => {
		set((state) => ({
			events: [
				...state.events,
				{
					id: newEvent.id,
					name: newEvent.name,
					price: newEvent.price,
					where: newEvent.where,
					amount: 0,
					when: {
						date: newEvent.when.date,
						from: newEvent.when.from,
						to: newEvent.when.to,
					},
				},
			],
		}));
	},
	setEventAmount: (id, newAmount) => {
		set((state) => {
			const updatedEvent = state.events.map((oldEvent) => {
				if (oldEvent.id === id) {
					return { ...oldEvent, amount: newAmount };
				} else {
					return { ...oldEvent };
				}
			});
			return { events: updatedEvent };
		});
	},
	increaseEventAmount: (id) => {
		set((state) => {
			const updatedEvent = state.events.map((oldEvent) => {
				if (oldEvent.id === id) {
					return { ...oldEvent, amount: oldEvent.amount + 1 };
				} else {
					return { ...oldEvent };
				}
			});
			return { events: updatedEvent };
		});
	},
	decreaseEventAmount: (id) => {
		set((state) => {
			const updatedEvent = state.events.map((oldEvent) => {
				if (oldEvent.id === id && oldEvent.amount > 0) {
					return { ...oldEvent, amount: oldEvent.amount - 1 };
				} else {
					return { ...oldEvent };
				}
			});
			return { events: updatedEvent };
		});
	},
}));

export default useEventStore;
