import style from 'components/Product/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from './styles.module.scss';
import common from 'components/common.module.scss';
import { products } from 'contants';
import clsx from 'clsx';

export default () => {
  return (
    <Page backText="Главная">
      <div className={styles.table}>
        {products.map(i => (
          <Link
            key={i.id}
            className={clsx(styles.item, common.shitEffects)}
            to={`/product/${i.id}`}
          >
            <img className={style.productPic} src={i.img} alt="" />
            <div className={styles.productName}>{i.name}</div>
          </Link>
        ))}
      </div>
      <Link
        style={{
          width: '260px',
          padding: 20,
          borderRadius: 12,
          marginTop: 20,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        to={'/bayer'}
        className={clsx(common.mainBtn, common.shitEffects)}
      >
        Портфель Женского здоровья Ex-Bayer
      </Link>
    </Page>
  );
};
