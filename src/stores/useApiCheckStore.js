import { create } from 'zustand';

const useApiCheckStore = create((set) => ({
	isLoading: false,
	isError: null,
	setIsLoading: (newState) => {
		set({ isLoading: newState });
	},
	setIsError: (newError) => {
		set({ isError: newError });
	},
}));

export default useApiCheckStore;
