import Fade from '@material-ui/core/Fade';
import React from 'react';

import styles from './styles.module.scss';

export default ({ children }: any) => {
  return (
    <div>
      <div className={styles.bg} />
      <Fade in={true} timeout={1100}>
        <div className={styles.root}>{children}</div>
      </Fade>
    </div>
  );
};
