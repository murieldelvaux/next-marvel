"use client";

import React from "react";
import styles from "@/app/(features)/(home)/components/OrderByNameSwitchFilter/order-by-name-switch-filter.module.css";
import { HeroIcon } from "@/app/(features)/icons/HeroIcon/HeroIcon";
import { useFiltersListHerosStore } from "@/app/(features)/stores/useFiltersListStore";

export const OrderByNameSwitchFilter = () => {
  const { setOrderByName, orderByName } = useFiltersListHerosStore();

  return (
    <div className={styles.switchGroup}>
      <HeroIcon />
      <p className={styles.textSwitchFilter}> Ordenar por nome - A/Z</p>

      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={orderByName}
          onChange={(e) => setOrderByName(e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
