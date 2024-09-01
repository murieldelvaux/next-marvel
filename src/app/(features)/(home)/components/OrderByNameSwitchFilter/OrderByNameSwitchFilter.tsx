"use client";

import React from "react";
import styles from "@/app/(features)/(home)/components/OrderByNameSwitchFilter/order-by-name-switch-filter.module.css";
import { HeroIcon } from "@/app/(features)/icons/HeroIcon/HeroIcon";
import { useFiltersListStore } from "@/app/(features)/stores/useFiltersListStore";

export const OrderByNameSwitchFilter = () => {
  const { setOrderByName } = useFiltersListStore();

  return (
    <div className={styles.switchGroup}>
      <HeroIcon />
      <p className={styles.textSwitchFilter}> Ordenar por nome - A/Z</p>

      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={(e) => setOrderByName(e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
