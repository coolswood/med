import styles from 'components/Home/styles.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';

import prod from './prod.png';
import style from './styles.module.scss';

export default () => {
  return (
    <Page>
      <div className={style.productLine}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
          deleniti doloremque et facilis impedit magni nam quam qui repellat
          rerum, voluptate. Dolorum facilis magnam minima necessitatibus odit
          officia officiis!
        </div>
        <img className={style.productPic} src={prod} alt="" />
      </div>
      <div className={styles.table}>
        <Link to={'/prezentation/1'} className={styles.item}>
          Презентация
        </Link>
      </div>
    </Page>
  );
};
