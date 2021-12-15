import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={clsx(styles.ball, styles.blue, 'ball-animation')} />
    <div className={clsx(styles.ball, styles.red, 'ball-animation')} />
    <div className={clsx(styles.ball, styles.yellow, 'ball-animation')} />
    <div className={clsx(styles.ball, styles.green, 'ball-animation')} />
  </div>
);
