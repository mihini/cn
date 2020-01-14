import React, { Component } from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = props => {
  return (
    <div className={`${styles.filter} container--padd`}>
      <select className={styles.select} onChange={props.onChange}>
        <option key="option-label">Filtrera på pris</option>
        {props.filterOptions.map((option, i) => {
          return (
            <option value={i} key={`option-${i}`}>
              {`Pris ${option.min} ${
                option.max ? " - " + option.max + " kr" : "kr >"
              }`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Filter.propTypes = {
  filterOptions: PropTypes.array,
  onChange: PropTypes.func
};

export default Filter;
