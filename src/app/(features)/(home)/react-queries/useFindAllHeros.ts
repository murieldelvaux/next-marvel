import { type QueryFnOptions } from "@/app/lib/react-query/react-query";
import { useQuery } from "@tanstack/react-query";
import { FindAllHerosPaginatedResponse } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";
import { findAllHerosPaginated } from "@/app/(features)/(home)/requests/findAllHerosPaginated";

export const findAllHerosQueryKey = "findAllHeros";

type UseFindAllHerosOptions<TData = FindAllHerosPaginatedResponse> = {
  offset?: number;
  limit?: number;
  name?: string;
  options?: QueryFnOptions<FindAllHerosPaginatedResponse | null, TData>;
};

export const useFindAllHeros = <TData = FindAllHerosPaginatedResponse | null>({
  limit,
  offset,
  name,
  options = {},
}: UseFindAllHerosOptions<TData> = {}) => {
  return useQuery({
    ...options,
    queryKey: [findAllHerosQueryKey, limit, offset, name],
    queryFn: () => findAllHerosPaginated({ limit, offset, name }),
  });
};
