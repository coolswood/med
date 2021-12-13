import React from 'react';
import SwiperCore, { Virtual, Lazy } from 'swiper/core';
import { Swiper } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';

import 'swiper/swiper.scss';

import './style.scss';

SwiperCore.use([Lazy, Virtual]);

type SliderTypes = {
  children: any;
  cssMode?: boolean;
  onSwiper: any;
};

export default ({ children, cssMode = false, onSwiper }: SliderTypes) => {
  return (
    <Swiper
      cssMode={cssMode}
      virtual
      autoHeight
      lazy
      onSwiper={onSwiper}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  );
};
