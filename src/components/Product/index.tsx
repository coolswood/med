import axios from 'axios';
import styles from 'components/Home/styles.module.scss';
import indexeddb from 'indexeddb-fs';
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'UI/Page';
import superBase64 from 'super-base-64';
// @ts-ignore
import { compress } from 'shrink-string';

import prod from './prod.png';
import style from './styles.module.scss';

export default () => {
  const save = async () => {
    axios({
      url: '/1.pdf', //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then(response => {
      superBase64(response.data).then(res => {
        compress(res).then((compressed: string) => {
          indexeddb.writeFile('/1pdf', compressed);
        });
      });
    });
  };

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
      <button onClick={save}>Сохранить</button>
      <div className={styles.table}>
        <Link to={'/prezentation/1'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/2'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/3'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/4'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/5'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/6'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/7'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/8'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/9'} className={styles.item}>
          Презентация
        </Link>
        <Link to={'/prezentation/10'} className={styles.item}>
          Презентация
        </Link>
      </div>
    </Page>
  );
};
