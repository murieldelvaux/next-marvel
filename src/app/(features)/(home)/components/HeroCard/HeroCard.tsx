import styles from "@/app/(features)/(home)/components/HeroCard/hero-card.module.css";
import { HeroCardProps } from "@/app/(features)/(home)/components/HeroCard/HeroCard.types";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";

export const HeroCard = ({ name, image }: HeroCardProps) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>{image}</div>
      </div>
      <div className={styles.heroData}>
        <p className={styles.heroName}>{name}</p>
        <Favorite />
      </div>
    </div>
  );
};
