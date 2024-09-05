import { useFindAllHerosPaginated } from "@/app/(features)/(home)/react-queries/useFindAllHerosPaginated";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";
import { usePaginationStore } from "@/app/(features)/stores/usePaginationStore";
import { useEffect } from "react";

export const useHeroSearchList = () => {
  const { offset } = usePaginationStore();
  const {
    orderByName,
    name,
    showOnlyFavorites,
    favoriteHerosList,
    setFavoriteHerosList,
  } = useFiltersListHerosStore();

  const {
    data: heros,
    isPending: isPendingHeros,
    isError,
  } = useFindAllHerosPaginated({
    limit: 16,
    offset,
    name,
    orderBy: orderByName ? "name" : "-name",
  });

  useEffect(() => {
    const favoritesStorage = localStorage.getItem("favoriteHeroList");
    const favoriteHeros = favoritesStorage ? JSON.parse(favoritesStorage) : [];
    setFavoriteHerosList(favoriteHeros);
  }, []);

  return {
    favoriteHerosList,
    heros,
    name,
    isError,
    isPendingHeros,
    showOnlyFavorites,
  };
};
