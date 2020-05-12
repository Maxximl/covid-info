import React from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import ChartsPage from "./pages/ChartsPage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className={styles.container}>
      <Router basename='/covid-info/'>
        <div className={styles.headerContainer}>
          <div className={styles.bg}>
            <AppHeader />
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
