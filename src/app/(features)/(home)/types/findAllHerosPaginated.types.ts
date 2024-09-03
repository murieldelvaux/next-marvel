export type FindAllHerosPaginatedProps = {
  offset?: number;
  limit?: number;
  name?: string;
  orderBy?: "name" | "-name";
};

type ThumbnailProps = {
  extension: string;
  path: string;
};

type ComicItems = {
  name: string;
  resourceURI: string;
};

type ComicProps = {
  available: number;
  collectionURI: string;
  items: ComicItems[];
  returned: number;
};

type SeriesProps = ComicProps;
type StoriesProps = ComicProps;

export type HerosResults = {
  id: number;
  name: string;
  thumbnail: ThumbnailProps;
  comics: ComicProps;
  description: string;
  series: SeriesProps;
  stories: StoriesProps;
};

type FindAllHerosPaginatedData = {
  count: number;
  limit: number;
  offset: number;
  results: HerosResults[];
  total: number;
};

export type FindAllHerosPaginatedResponse = {
  attributionHTML?: string;
  attributionText?: string;
  code?: number;
  copyright: string;
  data: FindAllHerosPaginatedData;
};
