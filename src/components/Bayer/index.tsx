import style from 'components/Product/styles.module.scss';
import React from 'react';
import Page from 'UI/Page';

import styles from './styles.module.scss';
import { bayer } from 'contants';
import common from 'components/common.module.scss';
import clsx from 'clsx';

export default () => {
  return (
    <Page backText="Продукты">
      <h3 className={styles.title}>Портфель Женского здоровья Ex-Bayer</h3>
      <div className={styles.table}>
        {bayer.map(i => (
          <div key={i.name} className={clsx(styles.item, common.shitEffects)}>
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
          </div>
        ))}
      </div>
    </Page>
  );
};
