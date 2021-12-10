import React from 'react';
import Page from 'UI/Page';

import prod from './prod.png';
import style from './styles.module.scss';
import styles from 'components/common.module.scss';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Page>
      <div className={style.productLine}>
        <div className={style.container}>
          <img
            style={{
              marginBottom: 20,
            }}
            className={style.productPic}
            src={prod}
            alt=""
          />
          <div
            style={{
              color: '#432E33',
              marginBottom: 5,
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Алвовизан
          </div>
          <div
            style={{
              color: '#432E33',
              marginBottom: 20,
              fontSize: 18,
            }}
          >
            Диеногест 2 мг
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            aspernatur deleniti doloremque et facilis impedit magni nam quam qui
            repellat rerum, voluptate. Dolorum facilis magnam minima
            necessitatibus odit officia officiis!
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to={'/prezentation/1'} className={styles.mainBtn}>
          Презентация
        </Link>
        <Link to={'/prezentation/2'} className={styles.mainBtn}>
          Презентация
        </Link>
        <Link to={'/prezentation/10'} className={styles.mainBtn}>
          Презентация
        </Link>
      </div>
    </Page>
  );
};
