import styles from "@/app/(features)/(home)/components/HomeHeader/home-header.module.css";

export const HomeHeader = () => {
  return (
    <div className={styles.homeHeader}>
      <h1 className={styles.title}>Explore o universo</h1>
      <p className={styles.subtitle}>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </div>
  );
};
