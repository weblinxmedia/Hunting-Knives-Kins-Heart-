import { create } from 'zustand';

interface UIState {
    isCartOpen: boolean;
    isDarkMode: boolean;
    toggleCart: () => void;
    toggleDarkMode: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isCartOpen: false,
    isDarkMode: false, // Default to light mode
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));