import React from "react";
import styles from "@/app/(features)/components/ErrorFeedback/error-feedback.module.css";
import Image from "next/image";

export const ErrorFeedback = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Opss, Algo deu errado...</p>
      <Image
        src="https://rollingstone.com.br/media/_versions/legacy/2014/img-1025056-rocket-raccoon_widelg.jpg"
        width={590}
        height={400}
        alt="Rocket Raccoon triste porque não deu certo"
        style={{
          borderRadius: "8px",
          marginBottom: "1rem",
          filter: "brightness(57%) contrast(99%)",
        }}
      />
    </div>
  );
};
