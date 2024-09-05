import styles from "@/app/(features)/(home)/components/HeroCard/hero-card.module.css";
import { HeroCardProps } from "@/app/(features)/(home)/components/HeroCard/HeroCard.types";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";
import Image from "next/image";
import Link from "next/link";

export const HeroCard = ({ image, href, hero }: HeroCardProps) => {
  const { favoriteHerosList } = useFiltersListHerosStore();

  return (
    <div className={styles.cardContent}>
      <Link
        className={styles.imageWrapper}
        href={href ?? ""}
        as={href}
        prefetch
      >
        <div className={styles.image}>
          {image && (
            <Image
              src={image}
              alt={`${name}`}
              fill
              className={styles.image}
              sizes="(max-width: 204px)"
            />
          )}
        </div>
      </Link>

      <div className={styles.heroData}>
        <Link className={styles.heroNameContent} href={href ?? ""}>
          <p className={styles.heroName}>{hero?.name}</p>
        </Link>
        <Favorite
          hero={hero}
          variant="favorite"
          isFavorite={favoriteHerosList.some(
            (favoriteHero) => favoriteHero.id === hero?.id
          )}
        />
      </div>
    </div>
  );
};
