import styles from "@/app/(features)/(hero)/[...heroId]/components/LatestComicReleases/latest-comic-releases.module.css";
import { LatestComicReleaseProps } from "@/app/(features)/(hero)/[...heroId]/components/LatestComicReleases/LatestComicRelease.types";
import { Loading } from "@/app/(features)/components/Loading/Loading";
import Image from "next/image";

export const LatestComicReleases = ({ comics }: LatestComicReleaseProps) => {
  return (
    <div className={styles.comicLastRelease}>
      <h1 className={styles.title}> Ultimos Lançamentos</h1>
      {comics && (
        <div className={styles.comicListContainer}>
          {comics?.results.map((comic) => (
            <div className={styles.comicCard} key={comic.id}>
              <div className={styles.comicImage}>
                <Image
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  fill
                  alt={comic.title}
                  sizes="(max-width: 204px)"
                  priority
                />
              </div>
              <p className={styles.comicTitle}>{comic.title}</p>
            </div>
          ))}
          {comics?.results.length === 0 && (
            <p className={styles.comicTitle}>
              Opssss, não encontramos nenhum quadrinho!
            </p>
          )}
        </div>
      )}

      {!comics && (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};
