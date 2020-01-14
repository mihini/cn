import React from "react";
import styles from "./Rating.module.css";
import PropTypes from "prop-types";

const Rating = props => {
  const starRatings = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (props.points < i) {
        stars.push(
          <div
            className={`${styles.filled} ${styles.star} ${
              props.small ? styles.small : ""
            } `}
            key={`star-${i}`}
          ></div>
        );
      } else {
        stars.push(
          <div
            className={`${styles.star} ${props.small ? styles.small : ""}`}
            key={`star-${i}`}
          ></div>
        );
      }
    }
    return stars;
  };

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>{starRatings()}</div>
      <span>{`(${props.reviews})`}</span>
    </div>
  );
};

Rating.propTypes = {
  points: PropTypes.number,
  reviews: PropTypes.number,
  small: PropTypes.bool
};

export default Rating;
