import React, { Component } from "react";
import styles from "./CountryList.module.css";
import { fetchCountriesList } from "../../api";
import CountryItem from "../CountryItem/CountryItem";

export default class CountryList extends Component {
  state = {
    countries: [],
    searched: "",
    selected: "World",
  };

  async componentDidMount() {
    const countries = await fetchCountriesList();
    console.log(countries);
    this.setState({ countries });
  }

  handleSearching = (event) => {
    this.setState({ searched: event.target.value });
  };

  onItemSelected = (name) => {
    this.setState({ selected: name });
    console.log(name);
    this.props.onCountrySelected(name);
  };

  renderList = (countries) => {
    const { selected } = this.state;

    return countries.map((country) => {
        return (
          <CountryItem
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
    const { countries, searched } = this.state;

    if (countries.length === 0) return <h2>Загрузка стран..</h2>;

    const visibleItems = this.renderList(
      this.searchCountries(countries, searched)
    );
    return (
      <div className={styles.container}>
        <input
          className={styles.countrySearch}
          value={searched}
          onChange={this.handleSearching}
        />
        <div className={styles.list}>{visibleItems}</div>
      </div>
    );
  }
}
