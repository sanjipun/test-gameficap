import create from "zustand";

type TagTypes = {
  openModal: string;
  setOpenModal: (value: string) => void;
};
export const useAuth = create<TagTypes>((set) => ({
  openModal: "",
  setOpenModal: (value: string) => {
    set({ openModal: value });
  },
}));
