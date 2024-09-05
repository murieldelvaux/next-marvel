import { FindHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export type LatestComicReleaseProps = {
  comics?: FindHeroComicsResponse["data"];
};
