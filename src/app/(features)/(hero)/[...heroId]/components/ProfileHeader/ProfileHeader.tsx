"use client";
import { Logo } from "@/app/(features)/components/Logo/Logo";
import styles from "@/app/(features)/(hero)/[...heroId]/components/ProfileHeader/profile-header.module.css";
import { Search } from "@/app/(features)/components/Search/Search";
import { useHeroProfile } from "@/app/(features)/(hero)/[...heroId]/hooks/useHeroProfile";

export const ProfileHeader = () => {
  const { router } = useHeroProfile();

  return (
    <div className={styles.profileHeader}>
      <Logo size="small" onClick={() => router.push("/")} />
      <Search variant="whiteAndRed" />
    </div>
  );
};
