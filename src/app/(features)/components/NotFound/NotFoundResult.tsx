import React from "react";
import styles from "@/app/(features)/components/NotFound/not-found-result.module.css";
import Image from "next/image";

export const NotFoundResult = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Opss, resultado não encontrado...</p>
      <Image
        src="https://rollingstone.com.br/media/_versions/estalo_de_thanos_foto_reproducaomarvel_widelg.jpg"
        width={590}
        height={400}
        alt="Thanos acabou com tudo"
        style={{
          borderRadius: "8px",
          marginBottom: "1rem",
          filter: "brightness(57%) contrast(99%)",
        }}
      />
    </div>
  );
};
