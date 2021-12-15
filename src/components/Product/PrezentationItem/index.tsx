import React from 'react';
import { Link } from 'react-router-dom';
import file from './file.svg';

import styles from './styles.module.scss';
import { pdfType } from 'components/Product/index';

type PrezentationItemType = {
  name: string;
  pdfName: string;
  type: pdfType;
};

export default ({ pdfName, name, type }: PrezentationItemType) => {
  return (
    <Link
      to={`/prezentation/${type}/${name}/${pdfName}`}
      className={styles.wrap}
    >
      <img src={file} alt="" />
      <div className={styles.text}>{name}</div>
    </Link>
  );
};
