import React from "react";
import styles from "@/app/(features)/components/ErrorFeedback/error-feedback.module.css";
import Image from "next/image";

export const ErrorFeedback = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Opss, Algo deu errado...</p>

      <div className={styles.imageContainer}>
        <div className={styles.imageContent}>
          <Image
            src="https://rollingstone.com.br/media/_versions/legacy/2014/img-1025056-rocket-raccoon_widelg.jpg"
            fill
            priority
            alt="Rocket Raccoon triste porque não deu certo"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};
