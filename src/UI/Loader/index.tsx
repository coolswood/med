import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={clsx(styles.ball, 'ball-animation')} />
    <div className={clsx(styles.ball, 'ball-animation')} />
    <div className={clsx(styles.ball, 'ball-animation')} />
    <div className={clsx(styles.ball, 'ball-animation')} />
  </div>
);
