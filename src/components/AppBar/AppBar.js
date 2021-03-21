import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';

const AppBar = () => (
  <header className={styles.header}>
    <Navigation />
  </header>
);

export default AppBar;
