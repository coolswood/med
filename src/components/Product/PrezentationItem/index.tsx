import React from 'react';
import { Link } from 'react-router-dom';
import file from './file.svg';

import styles from './styles.module.scss';

type PrezentationItemType = {
  name: string;
  pdfName: string;
};

export default ({ pdfName, name }: PrezentationItemType) => {
  return (
    <Link to={`/prezentation/${pdfName}`} className={styles.wrap}>
      <img src={file} alt="" />
      <div className={styles.text}>{name}</div>
    </Link>
  );
};
