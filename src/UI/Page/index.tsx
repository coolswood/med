import Fade from '@material-ui/core/Fade';
import BackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';
import clsx from 'clsx';

export default ({
  children,
  noMargin,
}: {
  children: any;
  noMargin?: boolean;
}) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <div className={styles.bg} />
      <Fade in={true} timeout={1100}>
        <div className={clsx(styles.root, noMargin && styles.noMargin)}>
          {window.location.pathname !== '/' && (
            <div className={styles.back} onClick={goBack}>
              <BackIcon />
              <span className={styles.backText}>Продукты</span>
            </div>
          )}
          {children}
        </div>
      </Fade>
      <div className={styles.bottom}></div>
    </div>
  );
};
