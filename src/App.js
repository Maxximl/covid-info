import React from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import ChartsPage from "./pages/ChartsPage";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.headerContainer}>
          <div className={styles.bg}>
            <AppHeader />
          </div>
        </div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/charts" component={ChartsPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/news" component={NewsPage} />
      </Router>
    </div>
  );
};

export default App;
