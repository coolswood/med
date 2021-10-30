import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from './styles.module.scss';

export default () => {
  return (
    <Page>
      <div className={styles.table}>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
        <Link to={'/catalog'} className={styles.item}>
          Портфель
        </Link>
      </div>
    </Page>
  );
};
