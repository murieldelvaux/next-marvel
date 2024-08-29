import { HeroCard } from "@/app/(features)/(home)/components/HeroCard/HeroCard";
import styles from "@/app/(features)/(home)/components/HeroSearchList/hero-search-list.module.css";

export const HeroSearchList = () => {
  return (
    <div className={styles.searchList}>
      <h1>Pesquisar</h1>
      <div className={styles.list}>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};
