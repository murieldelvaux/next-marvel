import { type HTMLAttributes } from "react";

export type PaginationProps = HTMLAttributes<PaginationProps> & {
  limit: number;
  total: number;
};
