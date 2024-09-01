import { FindAllHerosPaginatedResponse } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";

export type HeroDetailProps = {
  rating?: number;
  profile?: FindAllHerosPaginatedResponse["data"]["results"][0];
  lastComic?: string;
};
