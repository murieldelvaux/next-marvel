import styles from "@/app/styles/page.module.css";
import { Logo } from "@/app/(features)/components/Logo/Logo";
import { HomeHeader } from "@/app/(features)/(home)/components/HomeHeader/HomeHeader";
import { HeroSearchList } from "@/app/(features)/(home)/components/HeroSearchList/HeroSearchList";

export default function Home() {
  return (
    <div className={styles.main}>
      <Logo size="large" />
      <HomeHeader />
      <HeroSearchList />
    </div>
  );
}
