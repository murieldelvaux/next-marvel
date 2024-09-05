import { type QueryFnOptions } from "@/app/lib/react-query/react-query";
import { useQuery } from "@tanstack/react-query";
import { findHeroProfile } from "@/app/(features)/(hero)/[...heroId]/requests/findHeroProfile";
import { FindHeroProfileResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";
import { findHeroComics } from "@/app/(features)/(hero)/[...heroId]/requests/findHeroComics";
import { FindHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export const findHeroComicsQueryKey = "findHeroComics";

type UseFindHeroComicsOptions<TData = FindHeroComicsResponse> = {
  heroId: number;
  options?: QueryFnOptions<FindHeroComicsResponse | null, TData>;
};

export const useFindHeroComics = <TData = FindHeroComicsResponse | null>(
  { heroId, options = {} }: UseFindHeroComicsOptions<TData> = { heroId: 0 }
) => {
  return useQuery({
    ...options,
    queryKey: [findHeroComicsQueryKey, heroId],
    queryFn: () => findHeroComics({ heroId }),
  });
};
