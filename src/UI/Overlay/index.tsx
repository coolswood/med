import React from 'react';

import cross from './cross.svg';

export default ({ children, onClose }: any) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        background: 'rgba(47, 47, 52, 1)',
        width: '100%',
        height: '100%',
        zIndex: 100,
        maxWidth: 1100,
        marginBottom: 70,
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      <img
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          cursor: 'pointer',
        }}
        src={cross}
        onClick={onClose}
        alt=""
      />
      <div
        style={{
          marginTop: 60,
        }}
      >
        {children}
        <div
          style={{
            height: 90,
          }}
        ></div>
      </div>
    </div>
  );
};
