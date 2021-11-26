import React from 'react';
import SwiperCore, { Lazy, Pagination } from 'swiper/core';
import { Swiper } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';

import 'swiper/swiper.scss';

import './style.scss';

SwiperCore.use([Pagination, Lazy]);

type SliderTypes = {
  children: any;
  cssMode?: boolean;
};

export default ({ children, cssMode = false }: SliderTypes) => {
  return (
    <Swiper
      cssMode={cssMode}
      autoHeight
      lazy
      pagination={{
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
      }}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  );
};
