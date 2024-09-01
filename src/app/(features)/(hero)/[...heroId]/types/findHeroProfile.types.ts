import { type FindAllHerosPaginatedResponse } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";

export type FindHeroProfileRequest = {
  heroId: number;
};

export type FindHeroProfileResponse = FindAllHerosPaginatedResponse;
