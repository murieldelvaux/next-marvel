import React from "react";
import styles from "@/app/(features)/components/Pagination/pagination.module.css";
import { PaginationProps } from "@/app/(features)/components/Pagination/Pagination.types";
import { usePaginationStore } from "@/app/(features)/stores/usePaginationStore";

export const Pagination = ({ limit, total }: PaginationProps) => {
  const { setOffset, offset } = usePaginationStore();
  const totalPages = Math.floor(total / limit);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => {
          if (offset > 0) setOffset(offset - 1);
        }}
      >
        prev
      </button>

      <input
        placeholder="0"
        type="number"
        className={styles.input}
        defaultValue={offset}
        onChange={(e) => setOffset(Number(e.target.value))}
      />

      <button
        className={styles.button}
        onClick={() => {
          if (offset <= totalPages) setOffset(offset + 1);
        }}
      >
        next
      </button>
    </div>
  );
};
