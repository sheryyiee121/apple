import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    size: '16',
    setSize: (size) => set({ size }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () => set({
        color: '#2e2c2e',
        size: '16',
        scale: 0.08,
        texture: '/videos/feature-1.mp4',
    }),
}))

export default useMacbookStore;
