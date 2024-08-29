import styles from "@/app/(features)/components/Search/search.module.css";
import { SearchIcon } from "@/app/(features)/components/SearchIcon/SearchIcon";
import { SearchProps } from "./Search.types";

export const Search = ({ variant }: SearchProps) => {
  return (
    <div className={variant === "allRed" ? styles.searchRed : styles.search}>
      <SearchIcon />
      <input
        className={variant === "allRed" ? styles.inputRed : styles.input}
        placeholder="Procure por heróis"
      />
    </div>
  );
};
