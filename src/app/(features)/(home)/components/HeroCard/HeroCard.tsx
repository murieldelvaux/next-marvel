import styles from "@/app/(features)/(home)/components/HeroCard/hero-card.module.css";
import { HeroCardProps } from "@/app/(features)/(home)/components/HeroCard/HeroCard.types";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import Image from "next/image";

export const HeroCard = ({ name, image, onClick }: HeroCardProps) => {
  return (
    <div className={styles.cardContent} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          {image && (
            <Image
              src={image}
              alt={`${name}`}
              fill
              className={styles.image}
              sizes="(max-width: 204px)"
              priority
            />
          )}
        </div>
      </div>
      <div className={styles.heroData}>
        <p className={styles.heroName}>{name}</p>
        <Favorite />
      </div>
    </div>
  );
};
