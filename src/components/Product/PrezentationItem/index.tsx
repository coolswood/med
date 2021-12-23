import React from 'react';
import { Link } from 'react-router-dom';
import file from './file.svg';

import styles from './styles.module.scss';
import { pdfType } from 'components/Product/index';

type PrezentationItemType = {
  name: string;
  pdfName: string;
  forceVertical: boolean;
  type: pdfType;
};

export default ({
  pdfName,
  name,
  type,
  forceVertical,
}: PrezentationItemType) => {
  return (
    <Link
      to={`/prezentation/${type}/${name}/${pdfName}/${forceVertical}`}
      className={styles.wrap}
    >
      <img src={file} alt="" />
      <span className={styles.text}>{name}</span>
    </Link>
  );
};
