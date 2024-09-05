import { HerosResults } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";
import { FavoriteProps } from "@/app/(features)/components/Favorite/Favorite.types";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";

export const useFavoriteHero = () => {
  const {
    favoriteHerosList,
    setFavoriteHerosList,
    setShowOnlyFavorites,
    showOnlyFavorites,
  } = useFiltersListHerosStore();

  const handleUpdateFavoriteList = (newHero: HerosResults) => {
    const favoriteList = favoriteHerosList;
    const heroAlreadyIsFavorite = favoriteHerosList.some(
      (favoriteHero) => favoriteHero.id === newHero.id
    );

    if (favoriteHerosList.length < 5 && !heroAlreadyIsFavorite) {
      favoriteList.push(newHero);

      localStorage.setItem(
        "favoriteHeroList",
        JSON.stringify(favoriteHerosList)
      );

      setFavoriteHerosList([...favoriteList]);
    }

    if (heroAlreadyIsFavorite) {
      const unfavoritedHeroIndex = favoriteHerosList.findIndex(
        (hero) => hero.id === newHero.id
      );

      favoriteList.splice(unfavoritedHeroIndex, 1);

      localStorage.setItem(
        "favoriteHeroList",
        JSON.stringify(favoriteHerosList)
      );

      setFavoriteHerosList([...favoriteList]);
    }
  };

  const handleClickToSelectAction = ({ hero, variant }: FavoriteProps) => {
    if (hero && variant === "favorite") handleUpdateFavoriteList(hero);

    if (variant === "filterFavoriteOnly") {
      setShowOnlyFavorites(!showOnlyFavorites);
    }
  };

  return {
    favoriteHerosList,
    showOnlyFavorites,
    handleUpdateFavoriteList,
    handleClickToSelectAction,
    setShowOnlyFavorites,
  };
};
