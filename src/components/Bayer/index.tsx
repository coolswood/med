import style from 'components/Product/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import styles from './styles.module.scss';
import { products } from 'contants';

export default () => {
  return (
    <Page backText="Продукты">
      <h3 className={styles.title}>Портфель Женского здоровья Ex-Bayer</h3>
      <div className={styles.table}>
        {products.map(i => (
          <Link className={styles.item} to={`/product/${i.id}`}>
            <img className={style.productPic} src={i.img} alt="" />
            <div className={styles.textWrap}>
              <h4 className={styles.head}>Микрогинон</h4>
              <div className={styles.subtitle}>
                Действующее вещество препарата
              </div>
              <div className={styles.text}>
                Краткое описание. Краткое описание препарата. Препарат. Краткое
                описание. Краткое описание препарата.{' '}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
};
