import React from "react";
import styles from "./SalonMenu.module.css";

const SalonMenu = () => {
  return (
    <div className={styles.salonMenu}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.selected}`}>Info</li>
        <li className={styles.item}>Schema</li>
      </ul>
    </div>
  );
};

export default SalonMenu;
