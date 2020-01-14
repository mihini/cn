import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItem from "../ListItem";
import Filter from "../Filter";
import ListHeader from "../ListHeader";
import styles from "./List.module.css";

const filterOptions = [
  {
    id: 1,
    min: 250,
    max: 499
  },
  {
    id: 2,
    min: 500,
    max: 699
  },
  {
    id: 3,
    min: 700,
    max: 999
  },
  {
    id: 4,
    min: 1000,
    max: null
  }
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(e) {
    this.setState({
      filter: filterOptions[e.target.value]
    });
  }
  filteredSalons = () => {
    if (!this.state.filter) {
      return this.props.salon;
    } else {
      const { min, max } = this.state.filter;
      const filteredSal = this.props.salon.filter(sal => {
        if (sal.price >= min && (sal.price <= max || !max)) {
          return sal;
        }
      });
      return filteredSal;
    }
  };

  render() {
    return (
      <div>
        <ListHeader></ListHeader>
        <Filter
          filterOptions={filterOptions}
          value={this.state.filter}
          onChange={this.changeFilter}
        ></Filter>

        {this.filteredSalons().map((salonInfo, index) => (
          <Link
            className={styles.itemLink}
            key={`salon-${index}`}
            to={`/salon/${salonInfo.id}`}
          >
            <ListItem info={salonInfo}></ListItem>
          </Link>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  salon: PropTypes.array
};

export default List;
