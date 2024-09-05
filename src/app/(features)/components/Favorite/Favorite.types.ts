import { HerosResults } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";

export type FavoriteProps = {
  hero?: HerosResults;
  variant: "favorite" | "filterFavoriteOnly";
  isFavorite?: boolean;
};
