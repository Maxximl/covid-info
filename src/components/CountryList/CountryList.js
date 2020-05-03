import React, { Component } from "react";
import styles from "./CountryList.module.css";
import { fetchCountriesList } from "../../api";
import CountryItem from "../CountryItem/CountryItem";
import Spinner from "../Spinner/Spinner";


export default class CountryList extends Component {
  state = {
    countries: [],
    searched: "",
    selected: "World",
  };

  async componentDidMount() {
    const countries = await fetchCountriesList();
    this.setState({ countries });
  }

 
  onItemSelected = (name) => {
    this.setState({ selected: name });
    console.log(name);
    this.props.onCountrySelected(name);
  };

  renderList = (countries) => {
    const { selected } = this.state;

    return countries.map((country, i) => {
        return (
          <CountryItem
          key={i}
            country={country}
            onClickHandle={this.onItemSelected}
            isSelected={selected === country.Country}
          />
        );
      })
  };

  searchCountries = (countries, searched) => {
    if (searched === "") {
      return countries;
    }

    return countries.filter(
      (country) =>
        country.Country.toLowerCase().indexOf(searched.toLowerCase()) !== -1
    );
  };

  render() {
    const { countries } = this.state;
    const { searched } = this.props;  

    if (countries.length === 0) return (
      <div className={styles.container}>
          <Spinner/>
      </div>
    )

    const visibleItems = this.renderList(
      this.searchCountries(countries, searched)
    );
    return (
      <div className={styles.container}>
        <div className={styles.list}>{visibleItems}</div>
      </div>
    );
  }
}

