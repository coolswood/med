import React from 'react';
import Page from 'UI/Page';

import styles from './styles.module.scss';
import { bayer } from 'contants';
import common from 'components/common.module.scss';
import clsx from 'clsx';

export default () => {
  return (
    <Page backText="Продукты">
      <div className={styles.table}>
        {bayer.map(i => (
          <div key={i.name} className={clsx(styles.item, common.shitEffects)}>
            <img className={styles.img} src={i.img} alt="" />
            <div className={styles.textWrap}>
              <h4 className={styles.head}>{i.name}</h4>
              <div className={styles.subtitle}>{i.subtitle}</div>
              <div className={styles.text}>{i.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};
