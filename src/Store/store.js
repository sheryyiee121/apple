import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    size: '16',
    setSize: (size) => set({ size }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#2e2c2e', size: '16', scale: 0.08 }),
}))

export default useMacbookStore;
