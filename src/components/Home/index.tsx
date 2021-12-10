import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import logo from './logo.svg';

import styles from 'components/common.module.scss';

export default () => {
  return (
    <Page>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 50,
        }}
      >
        <img src={logo} alt="" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link to={'/catalog'} className={styles.mainBtn}>
          Продукты
        </Link>
      </div>
    </Page>
  );
};
