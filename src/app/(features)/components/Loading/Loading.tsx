import React from "react";
import styles from "@/app/(features)/components/Loading/loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loadingContent}>
      <div className={styles.loader} />
      <p>Loading...</p>
    </div>
  );
};
