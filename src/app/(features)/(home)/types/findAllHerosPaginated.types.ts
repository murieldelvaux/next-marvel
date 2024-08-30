export type FindAllHerosPaginatedProps = {
  offset?: number;
  limit?: number;
  name?: string;
};

type ThumbnailProps = {
  extension: string;
  path: string;
};

type HerosResults = {
  id: number;
  name: string;
  thumbnail: ThumbnailProps;
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
