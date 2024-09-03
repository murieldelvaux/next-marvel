"use server";
import { marvelServiceFetch } from "@/app/clients/marvelServiceFetch";

import {
  FindHeroProfileRequest,
  FindHeroProfileResponse,
} from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";

export const findHeroProfile = async ({ heroId }: FindHeroProfileRequest) => {
  const heros = await marvelServiceFetch<FindHeroProfileResponse>(
    `characters/${heroId}?`,
    {
      method: "GET",
    }
  );

  return heros;
};
