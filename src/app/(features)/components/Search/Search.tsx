import styles from "@/app/(features)/components/Search/search.module.css";
import { SearchIcon } from "@/app/(features)/icons/SearchIcon/SearchIcon";
import { SearchProps } from "./Search.types";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";

export const Search = ({ variant }: SearchProps) => {
  const { setName, name } = useFiltersListHerosStore();
  return (
    <div className={variant === "allRed" ? styles.searchRed : styles.search}>
      <SearchIcon />
      <input
        className={variant === "allRed" ? styles.inputRed : styles.input}
        placeholder="Procure por heróis"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
