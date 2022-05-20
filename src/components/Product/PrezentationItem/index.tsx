import React from 'react';
import { Link } from 'react-router-dom';
import file from './file.svg';
import video from './video.svg';

import styles from './styles.module.scss';
import { pdfType } from 'components/Product/index';

type PrezentationItemType = {
  name: string;
  pdfName: string;
  forceVertical?: boolean;
  icon?: 'video';
  type: pdfType;
};

export default ({
  pdfName,
  name,
  type,
  forceVertical,
  icon,
}: PrezentationItemType) => {
  return (
    <Link
      to={
        icon === 'video'
          ? `/video/${type}/${pdfName}`
          : `/prezentation/${type}/${name}/${pdfName}/${forceVertical}`
      }
      className={styles.wrap}
    >
      <img src={icon === 'video' ? video : file} alt="" />
      <span className={styles.text}>{name}</span>
    </Link>
  );
};
