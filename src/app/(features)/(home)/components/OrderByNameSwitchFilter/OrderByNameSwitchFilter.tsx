import React from "react";
import styles from "@/app/(features)/(home)/components/OrderByNameSwitchFilter/order-by-name-switch-filter.module.css";
import { HeroIcon } from "@/app/(features)/icons/HeroIcon/HeroIcon";

export const OrderByNameSwitchFilter = () => {
  return (
    <div className={styles.switchGroup}>
      <HeroIcon />
      <p className={styles.textSwitchFilter}> Ordenar por nome - A/Z</p>

      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
