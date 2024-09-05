type ThumbnailProps = {
  extension: string;
  path: string;
};

type DateProps = {
  type: "onsaleDate" | "focDate" | "unlimitedDate" | "digitalPurchaseDate";
  date: string;
};

export type ComicsResults = {
  id: number;
  digitalId: number;
  title: string;
  thumbnail: ThumbnailProps;
  description: string;
  dates: DateProps[];
};

type FindHeroComicsData = {
  count: number;
  limit: number;
  offset: number;
  results: ComicsResults[];
  total: number;
};

export type FindHeroComicsResponse = {
  attributionHTML?: string;
  attributionText?: string;
  code?: number;
  copyright: string;
  data: FindHeroComicsData;
};
