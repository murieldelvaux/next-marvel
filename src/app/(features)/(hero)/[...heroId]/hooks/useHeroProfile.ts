import { useFindHeroComics } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroComics";
import { useFindHeroProfile } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroProfile";
import { formatDate } from "@/app/utils/formatDate";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useHeroProfile = () => {
  const router = useRouter();
  const param = useParams();
  const id = decodeURIComponent(param.heroId[0]);
  const decryptId = atob(id);
  const totalComics = 61309;
  const totalSeries = 15084;

  const { data: profile } = useFindHeroProfile({ heroId: Number(decryptId) });
  const { data: comics } = useFindHeroComics({
    heroId: Number(decryptId),
  });

  const getRating = useCallback(() => {
    const totalComicsHeroAvailable =
      profile?.data?.results[0]?.comics?.available ?? 0;
    const totalSeriesHeroAvailable =
      profile?.data?.results[0]?.series.available ?? 0;

    const comicsRating =
      totalComicsHeroAvailable !== 0
        ? (totalComics / totalComicsHeroAvailable) * 0.7
        : 0;

    const seriesRating =
      totalComicsHeroAvailable !== 0
        ? (totalSeries / totalSeriesHeroAvailable) * 0.3
        : 0;

    const rating = (comicsRating + seriesRating) * 5;

    const ratingStars = Math.round((5 * rating) / 100);

    return ratingStars;
  }, [profile]);

  const lastComicDate = useCallback(() => {
    const lastComic =
      comics?.data.results[0].dates.filter(
        (date) => date.type === "onsaleDate"
      )[0].date ?? "";
    console.log("lastComic --->", lastComic);
    const date = formatDate(lastComic);
    console.log("date --->", date);

    return date;
  }, [comics]);

  console.log(profile, "comics --> ", comics);

  return {
    decryptId,
    profile,
    comics,
    router,
    lastComicDate,
    getRating,
  };
};
