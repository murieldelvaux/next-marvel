import { useFindHeroComics } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroComics";
import { useFindHeroProfile } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroProfile";
import { formatDate } from "@/app/utils/formatDate";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";

export const useHeroProfile = () => {
  const param = useParams();
  const id = decodeURIComponent(param.heroId[0]);
  const decryptId = atob(id);
  const { data: profile } = useFindHeroProfile({ heroId: Number(decryptId) });
  const { data: comics } = useFindHeroComics({
    heroId: Number(decryptId),
  });

  const lastComicDate = useCallback(() => {
    const lastComic =
      comics?.data.results[0].dates.filter(
        (date) => date.type === "onsaleDate"
      )[0].date ?? "";

    const date = formatDate(lastComic);

    return date;
  }, [comics]);

  console.log(profile, "comics --> ", comics);

  return {
    decryptId,
    profile,
    comics,
    lastComicDate,
  };
};
