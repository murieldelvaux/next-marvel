"use client";

import { HeroCard } from "@/app/(features)/(home)/components/HeroCard/HeroCard";
import styles from "@/app/(features)/(home)/components/HeroSearchList/hero-search-list.module.css";
import { Search } from "@/app/(features)/components/Search/Search";
import { useFindAllHerosPaginated } from "@/app/(features)/(home)/react-queries/useFindAllHerosPaginated";
import { Pagination } from "@/app/(features)/components/Pagination/Pagination";
import { usePaginationStore } from "@/app/(features)/stores/usePaginationStore";
import { Loading } from "@/app/(features)/components/Loading/Loading";
import { NotFoundResult } from "@/app/(features)/components/NotFound/NotFoundResult";
import { OrderByNameSwitchFilter } from "@/app/(features)/(home)/components/OrderByNameSwitchFilter/OrderByNameSwitchFilter";
import { FavoriteOnlyFilter } from "@/app/(features)/(home)/components/FavoriteOnlyFilter/FavoriteOnlyFilter";
import { ErrorFeedback } from "@/app/(features)/components/ErrorFeedback/ErrorFeedback";
import { useRouter } from "next/navigation";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";

export const HeroSearchList = () => {
  const { offset } = usePaginationStore();
  const { orderByName, name } = useFiltersListHerosStore();
  const {
    data: heros,
    isPending: isPendingHeros,
    isError,
  } = useFindAllHerosPaginated({
    limit: 16,
    offset,
    name,
    orderBy: orderByName ? "name" : "-name",
  });

  return (
    <div className={styles.searchList}>
      <Search variant="allRed" />

      <div className={styles.listContent}>
        <div className={styles.headerList}>
          <p
            className={styles.heroAmount}
          >{`Encontrados ${heros?.data.total ?? 0} heróis`}</p>

          <div className={styles.filters}>
            <OrderByNameSwitchFilter />
            <FavoriteOnlyFilter />
          </div>
        </div>

        <div className={styles.list}>
          {heros?.data.results &&
            heros?.data.results.length > 0 &&
            heros.data.results.map((hero) => (
              <HeroCard
                hero={hero}
                image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                key={hero.id}
                href={`/${btoa(String(hero.id))}`}
              />
            ))}
        </div>

        {isPendingHeros && <Loading />}

        {heros?.data.results && heros?.data.results.length === 0 && (
          <NotFoundResult />
        )}

        {isError && <ErrorFeedback />}

        <Pagination
          limit={heros?.data.limit ?? 15}
          total={heros?.data.total ?? 0}
          currentPage={heros?.data.offset}
        />
      </div>
    </div>
  );
};
