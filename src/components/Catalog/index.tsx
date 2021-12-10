import prod from 'components/Product/prod.png';
import style from 'components/Product/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from './styles.module.scss';

export default () => {
  return (
    <Page>
      <div className={styles.table}>
        <Link className={styles.item} to={'/product/1'}>
          <img className={style.productPic} src={prod} alt="" />
          <div className={styles.productName}>Алвовизан</div>
        </Link>
        <Link className={styles.item} to={'/product/1'}>
          <img className={style.productPic} src={prod} alt="" />
          <div className={styles.productName}>Алвовизан</div>
        </Link>
        <Link className={styles.item} to={'/product/1'}>
          <img className={style.productPic} src={prod} alt="" />
          <div className={styles.productName}>Алвовизан</div>
        </Link>
        <Link className={styles.item} to={'/product/1'}>
          <img className={style.productPic} src={prod} alt="" />
          <div className={styles.productName}>Алвовизан</div>
        </Link>
      </div>
    </Page>
  );
};
