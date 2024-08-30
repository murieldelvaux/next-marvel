import { create } from "zustand";

type PaginationStoreState = {
  offset: number;
  setOffset: (state: number) => void;
};

export const usePaginationStore = create<PaginationStoreState>((set) => ({
  offset: 0,
  setOffset: (state) => set(() => ({ offset: state })),
}));
