import { HerosResults } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";
import { useState } from "react";

export const useFavoriteHero = () => {
  const [favorite, setFavorite] = useState(false);
  const { favoriteHerosList, setFavoriteHerosList } =
    useFiltersListHerosStore();

  const handleUpdateFavoriteList = (newHero: HerosResults) => {
    const favoriteList = favoriteHerosList;
    const heroAlreadyIsFavorite = favoriteHerosList.some(
      (favoriteHero) => favoriteHero.id === newHero.id
    );

    if (favoriteHerosList.length < 5 && !heroAlreadyIsFavorite) {
      favoriteList.push(newHero);

      setFavorite(true);
      setFavoriteHerosList([...favoriteList]);
    }

    if (heroAlreadyIsFavorite) {
      const unfavoritedHeroIndex = favoriteHerosList.findIndex(
        (hero) => hero.id === newHero.id
      );
      favoriteList.splice(unfavoritedHeroIndex, 1);
      setFavorite(false);
    }
  };

  return {
    favorite,
    setFavorite,
    handleUpdateFavoriteList,
    favoriteHerosList,
  };
};
