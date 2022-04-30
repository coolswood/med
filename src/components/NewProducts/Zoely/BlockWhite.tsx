import React from 'react';

import section from './img/section.png';

export default () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
      }}
      className="box"
    >
      <h3
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#2F2F34',
          marginBottom: 40,
        }}
      >
        Достоинства препарата Zoely®
      </h3>
      <img height={358} src={section} alt="" />
    </div>
  );
};
