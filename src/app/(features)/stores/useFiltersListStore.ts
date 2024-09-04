import { HerosResults } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";
import { create } from "zustand";

type FiltersListHeroStoreState = {
  orderByName: boolean;
  setOrderByName: (state: boolean) => void;
  name: string;
  setName: (state: string) => void;
  showOnlyFavorites: boolean;
  setShowOnlyFavorites: (state: boolean) => void;
  favoriteHerosList: HerosResults[];
  setFavoriteHerosList: (hero: HerosResults[]) => void;
};

export const useFiltersListHerosStore = create<FiltersListHeroStoreState>(
  (set) => ({
    orderByName: false,
    setOrderByName: (state) => set(() => ({ orderByName: state })),
    showOnlyFavorites: false,
    setShowOnlyFavorites: (state) => set(() => ({ showOnlyFavorites: state })),
    name: "",
    setName: (state) => set(() => ({ name: state })),
    favoriteHerosList: [],
    setFavoriteHerosList: (hero) => set(() => ({ favoriteHerosList: hero })),
  })
);
