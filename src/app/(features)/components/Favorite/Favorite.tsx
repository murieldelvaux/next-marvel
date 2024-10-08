"use client";
import styles from "@/app/(features)/components/Favorite/favorite.module.css";
import { FavoriteProps } from "@/app/(features)/components/Favorite/Favorite.types";
import { useFavoriteHero } from "@/app/(features)/(home)/hooks/useFavoriteHero";

export const Favorite = ({ hero, variant, isFavorite }: FavoriteProps) => {
  const { handleClickToSelectAction, showOnlyFavorites } = useFavoriteHero();

  return (
    <button
      className={styles.favorite}
      data-testid={variant}
      id={`${hero?.id}`}
      onClick={() => {
        handleClickToSelectAction({ hero, variant });
      }}
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>favorito_02</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Guide"
            transform="translate(-231.000000, -828.000000)"
            fillRule="nonzero"
            stroke={isFavorite || showOnlyFavorites ? "" : "#FF0000"}
            fill={isFavorite || showOnlyFavorites ? "#FF0000" : ""}
            strokeWidth="2"
          >
            <path
              d="M248.428712,839.053345 L241.268331,846.885348 C241.199896,846.960594 241.102641,847 241.001802,847 C240.900941,847 240.803707,846.960594 240.735272,846.885348 L233.574892,839.053345 C231.475036,836.760342 231.475036,833.030654 233.574892,830.737651 C234.59779,829.616232 235.962887,829 237.418006,829 C238.750677,829 240.011307,829.515925 241.001802,830.465354 C241.992297,829.515925 243.249322,829 244.581993,829 C246.037112,829 247.405792,829.616232 248.432318,830.737651 C250.524963,833.030654 250.521357,836.760342 248.428712,839.053345 Z"
              id="favorito_02"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
};
