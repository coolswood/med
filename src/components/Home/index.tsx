import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from 'components/common.module.scss';
import clsx from 'clsx';

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
          color: '#F9D2D6',
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
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Продукты
        </Link>
      </div>
    </Page>
  );
};
