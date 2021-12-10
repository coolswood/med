import React from 'react';
import Page from 'UI/Page';

import prod from './prod.png';
import style from './styles.module.scss';
import styles from 'components/common.module.scss';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Page>
      <div className={style.productLine}>
        <div className={style.container}>
          <img className={style.productPic} src={prod} alt="" />
          <div>Алвовизан</div>
          <div>Диеногест 2 мг</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            aspernatur deleniti doloremque et facilis impedit magni nam quam qui
            repellat rerum, voluptate. Dolorum facilis magnam minima
            necessitatibus odit officia officiis!
          </div>
        </div>
      </div>
      <div>
        <Link to={'/prezentation/1'} className={styles.mainBtn}>
          Презентация
        </Link>
      </div>
    </Page>
  );
};
