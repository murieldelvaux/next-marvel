"use server";
import { marvelServiceFetch } from "@/app/clients/marvelServiceFetch";
import {
  FindAllHerosPaginatedProps,
  FindAllHerosPaginatedResponse,
} from "@/app/(features)/(home)/types/findAllHerosPaginated.types";

export const findAllHerosPaginated = async ({
  limit,
  offset,
  name,
}: FindAllHerosPaginatedProps = {}) => {
  const queryParameters = new URLSearchParams({
    ...(limit && { limit: String(limit) }),
    ...(offset && { offset: String(offset) }),
    ...(name && { name: name }),
  });

  const heros = await marvelServiceFetch<FindAllHerosPaginatedResponse>(
    `characters?${queryParameters}`,
    {
      method: "GET",
    }
  );

  return heros;
};
