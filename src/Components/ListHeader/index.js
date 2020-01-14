import React from "react";
import styles from "./ListHeader.module.css";
import arrow from "../../images/icons/arrow.svg";
import filter from "../../images/icons/filter.svg";
const ListHeader = () => {
  return (
    <div className={`${styles.listHeader} container--padd`}>
      <button className={styles.noStyleBtn}>
        <img className={styles.arrow} src={arrow} />
      </button>
      <h1 className={styles.title}>Hår</h1>
      <button className={styles.noStyleBtn}>
        <img src={filter} className={styles.settings} />
      </button>
    </div>
  );
};

export default ListHeader;
