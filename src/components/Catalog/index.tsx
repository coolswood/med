import style from 'components/Product/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from './styles.module.scss';
import { products } from 'contants';

export default () => {
  return (
    <Page>
      <div className={styles.table}>
        {products.map(i => (
          <Link className={styles.item} to={`/product/${i.id}`}>
            <img className={style.productPic} src={i.img} alt="" />
            <div className={styles.productName}>{i.name}</div>
          </Link>
        ))}
      </div>
    </Page>
  );
};
