import ok from 'components/NewProducts/Zoely/img/ok.svg';
import plus from 'components/NewProducts/Zoely/img/plus.svg';
import React from 'react';

export default ({ text, isWhite = false, isPlus = false }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <img width={33} height={33} src={isPlus ? plus : ok} alt="" />
      <div
        style={{
          marginLeft: 23,
          fontSize: 16,
          fontWeight: 400,
          color: isWhite ? '#fff' : '#000',
        }}
      >
        {text}
      </div>
    </div>
  );
};
