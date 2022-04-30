import style from 'components/Product/styles.module.scss';
import clsx from 'clsx';
import styles from 'components/common.module.scss';
import React from 'react';

export default () => {
  return (
    <div className={style.buttons}>
      <div
        onClick={() => {}}
        className={clsx(styles.mainBtn, styles.shitEffects)}
      >
        Иструкции
      </div>
      <div
        onClick={() => {}}
        className={clsx(styles.mainBtn, styles.shitEffects)}
      >
        Материалы
      </div>
      <div
        onClick={() => {}}
        className={clsx(styles.mainBtn, styles.shitEffects)}
      >
        Презентации
      </div>
    </div>
  );
};
