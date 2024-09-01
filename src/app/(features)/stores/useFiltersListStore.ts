import { create } from "zustand";

type FiltersListStoreState = {
  orderByName: boolean;
  setOrderByName: (state: boolean) => void;
};

export const useFiltersListStore = create<FiltersListStoreState>((set) => ({
  orderByName: false,
  setOrderByName: (state) => set(() => ({ orderByName: state })),
}));
