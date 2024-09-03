export type FetchDefaultError = {
  message?: string;
};

export type FetchWrapperError = {
  statusCode: number;
  message: string;
  error: Error;
};
