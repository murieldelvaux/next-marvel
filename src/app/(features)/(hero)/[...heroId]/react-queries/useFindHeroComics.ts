import { type QueryFnOptions } from "@/app/lib/react-query/react-query";
import { useQuery } from "@tanstack/react-query";
import { findHeroProfile } from "@/app/(features)/(hero)/[...heroId]/requests/findHeroProfile";
import { FindHeroProfileResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";
import { findHeroComics } from "@/app/(features)/(hero)/[...heroId]/requests/findHeroComics";
import { FindAHeroComicsResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroComics.types";

export const findHeroComicsQueryKey = "findHeroComics";

type UseFindHeroComicsOptions<TData = FindAHeroComicsResponse> = {
  heroId: number;
  options?: QueryFnOptions<FindAHeroComicsResponse | null, TData>;
};

export const useFindHeroComics = <TData = FindAHeroComicsResponse | null>(
  { heroId, options = {} }: UseFindHeroComicsOptions<TData> = { heroId: 0 }
) => {
  return useQuery({
    ...options,
    queryKey: [findHeroComicsQueryKey, heroId],
    queryFn: () => findHeroComics({ heroId }),
  });
};
