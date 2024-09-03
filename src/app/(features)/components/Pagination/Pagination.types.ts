import { type HTMLAttributes } from "react";

export type PaginationProps = HTMLAttributes<PaginationProps> & {
  currentPage?: number;
  limit: number;
  total: number;
};
