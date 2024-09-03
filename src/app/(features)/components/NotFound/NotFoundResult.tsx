import React from "react";
import styles from "@/app/(features)/components/NotFound/not-found-result.module.css";
import Image from "next/image";

export const NotFoundResult = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Opss, resultado não encontrado...</p>

      <div className={styles.imageContainer}>
        <div className={styles.imageContent}>
          <Image
            src="https://rollingstone.com.br/media/_versions/estalo_de_thanos_foto_reproducaomarvel_widelg.jpg"
            fill
            alt="Thanos acabou com tudo"
            priority
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};
