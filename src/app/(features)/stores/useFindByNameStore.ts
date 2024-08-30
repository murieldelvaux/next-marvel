import { create } from "zustand";

type FindByNameStoreState = {
  name: string;
  setName: (state: string) => void;
};

export const useFindByNameStore = create<FindByNameStoreState>((set) => ({
  name: "",
  setName: (state) => set(() => ({ name: state })),
}));
