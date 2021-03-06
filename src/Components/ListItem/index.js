import React from "react";
import styles from "./ListItem.module.css";
import PropTypes from "prop-types";
import Rating from "../Rating";
import arrow from "../../images/icons/arrow.svg";

const ListItem = props => {
  const salon = props.info;

  return (
    <div className={`${styles.listItem} container`}>
      <div className={styles.wrapperAlpha}>
        <h2 className={styles.title}>{salon.name}</h2>
        <Rating
          reviews={salon.rating.totalReviews}
          points={salon.rating.points}
          small={true}
        ></Rating>
        <div className={styles.address}>{salon.address.rd}</div>
      </div>
      <div className={styles.wrapperBeta}>
        <div>
          <div className={styles.price}>{salon.price} kr</div>
          <div className={styles.session}>{salon.session}</div>
        </div>
        <div className={styles.iconWrapper}>
          <img className={styles.arrow} src={arrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  info: PropTypes.object
};
export default ListItem;
