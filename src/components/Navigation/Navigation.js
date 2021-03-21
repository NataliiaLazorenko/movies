import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
