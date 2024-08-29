import { HeroCard } from "@/app/(features)/(home)/components/HeroCard/HeroCard";
import styles from "@/app/(features)/(home)/components/HeroSearchList/hero-search-list.module.css";
import { Search } from "@/app/(features)/components/Search/Search";

export const HeroSearchList = () => {
  return (
    <div className={styles.searchList}>
      <Search variant="allRed" />

      <div className={styles.listContent}>
        <div className={styles.headerList}>
          <p className={styles.heroAmount}>Encontrados 20 heróis</p>

          <div className={styles.filters}>
            <div>filtro 1</div>
            <div>filtro 2</div>
          </div>
        </div>

        <div className={styles.list}>
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
          <HeroCard name="Hulk" />
        </div>
      </div>
    </div>
  );
};
