import styles from 'components/Home/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

export default () => {
  return (
    <Page>
      <div className={styles.table}>
        <Link to={'/prezentation/1'} className={styles.item}>
          lorem dsdff
        </Link>
      </div>
    </Page>
  );
};
