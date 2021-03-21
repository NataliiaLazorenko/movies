import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <Loader type="ThreeDots" color="#2196f3" height={80} width={80} />
  </div>
);

export default Spinner;
