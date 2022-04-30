import ok from 'components/NewProducts/Zoely/img/ok.svg';
import React from 'react';

export default ({ text, isWhite = false }: any) => {
  console.log(isWhite);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <img width={33} height={33} src={ok} alt="" />
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
