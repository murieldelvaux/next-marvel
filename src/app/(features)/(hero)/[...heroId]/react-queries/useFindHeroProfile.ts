import { type QueryFnOptions } from "@/app/lib/react-query/react-query";
import { useQuery } from "@tanstack/react-query";
import { findHeroProfile } from "@/app/(features)/(hero)/[...heroId]/requests/findHeroProfile";
import { FindHeroProfileResponse } from "@/app/(features)/(hero)/[...heroId]/types/findHeroProfile.types";

export const findHeroProfileQueryKey = "findHeroProfile";

type UseFindHeroProfileOptions<TData = FindHeroProfileResponse> = {
  heroId: number;
  options?: QueryFnOptions<FindHeroProfileResponse | null, TData>;
};

export const useFindHeroProfile = <TData = FindHeroProfileResponse | null>(
  { heroId, options = {} }: UseFindHeroProfileOptions<TData> = { heroId: 0 }
) => {
  return useQuery({
    ...options,
    queryKey: [findHeroProfileQueryKey, heroId],
    queryFn: () => findHeroProfile({ heroId }),
  });
};
