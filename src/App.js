import React, { Component } from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import Cards from "./components/Cards/Cards";
import { fetchData } from "./api/index";
import CountryCards from "./components/CountryCards/CountryCards";
import Chart from "./components/Chart/Chart";

export default class App extends Component {
  state = {
    data: {},
    countryData: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <AppHeader />
        <Cards data={data} />
        <CountryCards data={data} />
        <Chart />
      </div>
    );
  }
}
