"use server";
import { marvelServiceFetch } from "@/app/clients/marvelServiceFetch";

import { FindHeroProfileRequest } from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";
import { FindAHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export const findHeroComics = async ({ heroId }: FindHeroProfileRequest) => {
  const comics = await marvelServiceFetch<FindAHeroComicsResponse>(
    `characters/${heroId}/comics?orderBy=-onsaleDate`,
    {
      method: "GET",
    }
  );

  return comics;
};
