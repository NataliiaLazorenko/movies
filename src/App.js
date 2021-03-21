import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navigationItem}>
            <NavLink
              to="/movies"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
};

export default App;
