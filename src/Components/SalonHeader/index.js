import React from "react";
import PropTypes from "prop-types";
import styles from "./SalonHeader.module.css";
import Rating from "../Rating";

const SalonHeader = props => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.content} container`}>
        <div className={styles.topIcons}>
          <button className={styles.btn} onClick={props.goBack}>
            <span className={styles.backArrow}></span>
          </button>
          <button className={styles.btn}>
            <span className={styles.like}></span>
          </button>
        </div>

        <div className={styles.text}>
          <h1>{props.name}</h1>
          <Rating
            reviews={props.rating.totalReviews}
            points={props.rating.points}
          ></Rating>
        </div>
      </div>
    </div>
  );
};

SalonHeader.propTypes = {
  rating: PropTypes.object,
  name: PropTypes.string,
  goBack: PropTypes.func.isRequired
};

export default SalonHeader;
