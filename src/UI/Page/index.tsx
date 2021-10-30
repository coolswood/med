import Fade from '@material-ui/core/Fade';
import BackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

export default ({ children }: any) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <div className={styles.bg} />
      <Fade in={true} timeout={1100}>
        <div className={styles.root}>
          {window.location.pathname !== '/' && (
            <div className={styles.back} onClick={goBack}>
              <BackIcon />
            </div>
          )}
          {children}
        </div>
      </Fade>
    </div>
  );
};
