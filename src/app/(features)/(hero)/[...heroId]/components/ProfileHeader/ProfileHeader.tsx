import { Logo } from "@/app/(features)/components/Logo/Logo";
import styles from "@/app/(features)/(hero)/[...heroId]/components/ProfileHeader/profile-header.module.css";
import { Search } from "@/app/(features)/components/Search/Search";

export const ProfileHeader = () => {
  return (
    <div className={styles.profileHeader}>
      <Logo size="small" />
      <Search variant="whiteAndRed" />
    </div>
  );
};
