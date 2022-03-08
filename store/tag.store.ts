import create from "zustand";

type TagTypes = {
    activeTag: string;
    setActiveTag: (tag: string) => void
};
export const useTag = create<TagTypes>((set) => ({
    activeTag: 'all',
    setActiveTag: (tag: string) => {
        set({ activeTag: tag })
    }
}));
