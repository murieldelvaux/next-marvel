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
  orderBy,
}: FindAllHerosPaginatedProps = {}) => {
  const queryParameters = new URLSearchParams({
    ...(limit && { limit: String(limit) }),
    ...(offset && { offset: String(offset) }),
    ...(name && { nameStartsWith: name }),
    ...(orderBy && { orderBy }),
  });

  const heros = await marvelServiceFetch<FindAllHerosPaginatedResponse>(
    `characters?${queryParameters}`,
    {
      method: "GET",
    }
  );

  return heros;
};
