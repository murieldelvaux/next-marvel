import styles from "@/app/(features)/(hero)/[...heroId]/components/HeroDetail/hero-detail.module.css";
import { HeroDetailProps } from "@/app/(features)/(hero)/[...heroId]/components/HeroDetail/HeroDetail.types";
import { Rating } from "@/app/(features)/(hero)/[...heroId]/components/Rating/Rating";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import { Loading } from "@/app/(features)/components/Loading/Loading";
import { ComicsIcon } from "@/app/(features)/icons/ComicsIcon/ComicsIcon";
import { TrailersIcon } from "@/app/(features)/icons/TrailersIcon/TrailersIcon";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";
import Image from "next/image";
import "react";

export const HeroDetail = ({ profile, lastComic, rating }: HeroDetailProps) => {
  const { favoriteHerosList } = useFiltersListHerosStore();

  return (
    <div className={styles.detailContainer}>
      {profile && (
        <>
          <div className={styles.heroNameBackground}>
            {profile?.name.split(" ")[0].split("/")[0].replace("-", " ")}
          </div>

          <div className={styles.detail}>
            <div className={styles.heroNameSection}>
              <h1 className={styles.heroName}>{profile?.name}</h1>
              <Favorite
                variant="favorite"
                hero={profile}
                isFavorite={favoriteHerosList.some(
                  (favoriteHero) => favoriteHero.id === profile.id
                )}
              />
            </div>

            <p className={styles.heroDescription}>
              {profile?.description !== ""
                ? profile?.description
                : "Não há descrição"}
            </p>

            <div className={styles.col}>
              <div className={styles.row} style={{ gap: "48px" }}>
                <div className={styles.col}>
                  <p className={styles.summaryTitle}>Quadrinhos</p>
                  <div className={styles.row}>
                    <ComicsIcon />
                    <p className={styles.summaryData}>
                      {profile?.comics.available}
                    </p>
                  </div>
                </div>

                <div className={styles.col}>
                  <p className={styles.summaryTitle}>Filmes</p>
                  <div className={styles.row}>
                    <TrailersIcon />
                    <p className={styles.summaryData}>
                      {profile?.stories.available}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <p className={styles.summaryTitle}>Rating:</p>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }, (_, i) =>
                    rating > i ? (
                      <Rating status="on" />
                    ) : (
                      <Rating status="off" />
                    )
                  )}
                </div>
              </div>

              <div className={styles.row}>
                <p className={styles.summaryTitle}>Último quadrinho: </p>
                <p className={styles.summaryLastComicDate}>{lastComic}</p>
              </div>
            </div>
          </div>

          {profile?.thumbnail && (
            <div className={styles.imageContainer}>
              <Image
                src={`${profile?.thumbnail.path}.${profile?.thumbnail.extension}`}
                fill
                alt={profile?.name ?? ""}
                priority
                sizes="(min-width: 200px)"
                className={styles.image}
              />
            </div>
          )}
        </>
      )}

      {!profile && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
    </div>
  );
};
