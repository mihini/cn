import React from "react";
import PropTypes from "prop-types";
import clock from "../../images/icons/clock.svg";
import phoneIcon from "../../images/icons/phone.svg";
import globe from "../../images/icons/globe.svg";
import pin from "../../images/icons/pin.svg";
import arrow from "../../images/icons/arrow.svg";
import SalonHeader from "../SalonHeader";
import SalonMenu from "../SalonMenu";
import styles from "./Salon.module.css";
import "core-js/modules/es.array.find";

const getSpecificSalon = props => {
  const salonId = props.match.params.id;
  return props.salon.find(sal => sal.id == salonId);
};

const getClosingTime = salon => {
  const today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0) {
    return salon.openingHour.weekend;
  } else {
    return salon.openingHour.weekday;
  }
};

const Salon = props => {
  const salon = getSpecificSalon(props);
  const { address, name, phone, url, info, rating } = salon;

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className={styles.salon}>
      <SalonHeader name={name} goBack={goBack} rating={rating}></SalonHeader>
      <SalonMenu></SalonMenu>
      <div className={`${styles.info} container`}>
        <div className={styles.infoItem}>
          <img src={pin} alt="pin address icon" />
          <span> {`${address.rd}, ${address.zip}`}</span>
        </div>
        <div className={styles.infoItem}>
          <img src={clock} alt="time icon" />
          <span>Öppet till {getClosingTime(salon)} idag</span>
          <img className={styles.drop} src={arrow} alt="dropdown" />
        </div>
        <div className={styles.infoItem}>
          <img src={phoneIcon} alt="phone icon" />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className={styles.infoItem}>
          <img src={globe} alt="globe icon" />
          <a href={url}>{url}</a>
        </div>
        <div className={`${styles.infoItem} ${styles.last}`}>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

Salon.propTypes = {
  salon: PropTypes.array
};

export default Salon;
