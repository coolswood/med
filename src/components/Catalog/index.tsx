import styles from 'components/Home/styles.module.scss';
import prod from 'components/Product/prod.png';
import style from 'components/Product/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

export default () => {
  return (
    <Page>
      <div className={styles.table}>
        <Link to={'/product/1'}>
          <img className={style.productPic} src={prod} alt="" />
        </Link>
      </div>
    </Page>
  );
};
