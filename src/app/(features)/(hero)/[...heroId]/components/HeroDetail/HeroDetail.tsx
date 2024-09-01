import styles from "@/app/(features)/(hero)/[...heroId]/components/HeroDetail/hero-detail.module.css";
import { HeroDetailProps } from "@/app/(features)/(hero)/[...heroId]/components/HeroDetail/HeroDetail.types";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import { ComicsIcon } from "@/app/(features)/icons/ComicsIcon/ComicsIcon";
import Image from "next/image";
import "react";

export const HeroDetail = ({ profile, lastComic, rating }: HeroDetailProps) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detail}>
        <div className={styles.heroNameSection}>
          <h1 className={styles.heroName}>{profile?.name}</h1>
          <Favorite />
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
                <ComicsIcon />
                <p className={styles.summaryData}>
                  {profile?.stories.available}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <p className={styles.summaryTitle}>Rating:</p>
            <p>1234</p>
          </div>

          <div className={styles.row}>
            <p className={styles.summaryTitle}>Último quadrinho: </p>
            <p className={styles.summaryLastComicDate}>{lastComic}</p>
          </div>
        </div>
      </div>

      {profile?.thumbnail && (
        <div className={styles.imageBackground}>
          <Image
            src={`${profile?.thumbnail.path}.${profile?.thumbnail.extension}`}
            fill
            alt={profile?.name ?? ""}
            priority
          />
        </div>
      )}
    </div>
  );
};
