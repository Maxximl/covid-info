import React, { Component } from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { fetchData } from "./api/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountryInfoPage from "./components/CountryInfo/CountryInfo";
import MapPage from './pages/MapPage';
import ChartsPage from "./pages/ChartsPage";

export default class App extends Component {
  state = {
    data: null,
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
        <Router>
          <div className={styles.headerContainer}>
            <div className={styles.bg}>
              <AppHeader />
            </div>
          </div>
          <Route exact path="/" component={CountryInfoPage} />
          <Route
            exact
            path="/charts"
            component={ChartsPage}
          />
          <Route
            exact
            path="/map"
            component={MapPage}
          />
        </Router>
      </div>
    );
  }
}
