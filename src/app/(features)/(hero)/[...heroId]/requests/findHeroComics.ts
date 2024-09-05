"use server";
import { marvelServiceFetch } from "@/app/clients/marvelServiceFetch";

import { FindHeroProfileRequest } from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";
import { FindHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export const findHeroComics = async ({ heroId }: FindHeroProfileRequest) => {
  const comics = await marvelServiceFetch<FindHeroComicsResponse>(
    `characters/${heroId}/comics?orderBy=-onsaleDate`,
    {
      method: "GET",
    }
  );

  return comics;
};
