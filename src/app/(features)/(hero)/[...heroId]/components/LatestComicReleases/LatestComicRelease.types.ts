import { FindAHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export type LatestComicReleaseProps = {
  comics?: FindAHeroComicsResponse["data"]["results"];
};
