import styles from "@/app/(features)/(home)/components/HeroCard/hero-card.module.css";

export const HeroCard = () => {
  return (
    <div className={styles.cardContent}>
      <p>foto</p>
      <div className={styles.heroData}>
        <p>Name</p>
        <p>curtir</p>
      </div>
    </div>
  );
};
