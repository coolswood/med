import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

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
          marginTop: 150,
          fontSize: 60,
          color: '#F0E9E7',
          fontWeight: 'bold',
        }}
      >
        ZENTIVA WOMAN HEALTH
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link
          style={{
            width: '420px',
          }}
          to={'/catalog'}
          className={styles.mainBtn}
        >
          Продукты
        </Link>
      </div>
    </Page>
  );
};
