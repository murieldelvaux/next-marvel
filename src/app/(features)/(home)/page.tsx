import styles from "@/app/styles/page.module.css";
import { Logo } from "@/app/(features)/components/Logo/Logo";
import { HomeHeader } from "@/app/(features)/(home)/components/HomeHeader/HomeHeader";
import { HeroSearchList } from "@/app/(features)/(home)/components/HeroSearchList/HeroSearchList";
import { Footer } from "@/app/(features)/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Logo size="large" />
        <HomeHeader />
        <HeroSearchList />
      </div>
      <Footer />
    </div>
  );
}
