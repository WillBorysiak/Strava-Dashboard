import { create } from 'zustand';

interface YearStore {
	selectedYear: number;
	changeSelectedYear: any;
}

export const useYearStore = create<YearStore>(set => ({
	selectedYear: 2023,
	changeSelectedYear: (payload: number) => set(state => ({ selectedYear: payload })),
}));
