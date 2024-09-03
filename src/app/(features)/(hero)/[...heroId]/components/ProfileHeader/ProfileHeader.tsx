"use client";
import { Logo } from "@/app/(features)/components/Logo/Logo";
import styles from "@/app/(features)/(hero)/[...heroId]/components/ProfileHeader/profile-header.module.css";
import { Search } from "@/app/(features)/components/Search/Search";
import { useHeroProfile } from "@/app/(features)/(hero)/[...heroId]/hooks/useHeroProfile";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";

export const ProfileHeader = () => {
  const { router } = useHeroProfile();
  const { setName, setOrderByName } = useFiltersListHerosStore();

  return (
    <div className={styles.profileHeader}>
      <Logo
        size="small"
        onClick={() => {
          setName("");
          setOrderByName(false);
        }}
      />
      <Search variant="whiteAndRed" />
    </div>
  );
};
