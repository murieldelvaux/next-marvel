import { HerosResults } from "@/app/(features)/(home)/types/findAllHerosPaginated.types";

export type HeroCardProps = {
  image?: string;
  href?: string;
  hero?: HerosResults;
};
