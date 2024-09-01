import styles from "@/app/(features)/(hero)/[...heroId]/components/LatestComicReleases/latest-comic-releases.module.css";
import { LatestComicReleaseProps } from "@/app/(features)/(hero)/[...heroId]/components/LatestComicReleases/LatestComicRelease.types";
import Image from "next/image";

export const LatestComicReleases = ({ comics }: LatestComicReleaseProps) => {
  console.log(comics);
  return (
    <div className={styles.comicLastRelease}>
      <h1 className={styles.title}> Ultimos Lançamentos</h1>

      <div className={styles.comicListContainer}>
        {comics?.map((comic) => (
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
      </div>
    </div>
  );
};
