import React from 'react';

export default ({ text, link }: any) => {
  return (
    <div
      style={{
        color: '#fff',
        marginBottom: 10,
      }}
    >
      <span>[ссылка: </span>{' '}
      <a className="link_active_small" href={link} target="_blank">
        {text}
      </a>
      <span>]</span>
    </div>
  );
};
