import { HeroProfile } from "@/app/(features)/(hero)/[...heroId]/components/Profile/Profile";
import styles from "@/app/(features)/styles/page.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <HeroProfile />
    </div>
  );
}
