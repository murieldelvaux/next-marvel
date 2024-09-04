import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import styles from "@/app/(features)/(home)/components/FavoriteOnlyFilter/favorite-only-filter.module.css";

export const FavoriteOnlyFilter = () => {
  return (
    <div className={styles.favoriteFilterContainer}>
      <Favorite variant="filterFavoriteOnly" />
      <p> Somente Favoritos</p>
    </div>
  );
};
