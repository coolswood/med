import React from 'react';

import accord_1 from './img/accord_1.png';
import accord_2 from './img/accord_2.png';
import accord_3 from './img/accord_3.png';

export default () => {
  return (
    <div className="box">
      <h3
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: '#F9D2D6',
        }}
      >
        В настоящее время используются 3 типа эстрогенов в составе КОК
      </h3>
      <div
        style={{
          color: '#2F2F34',
          fontWeight: 600,
          fontSize: 20,
          padding: 20,
          background: '#F9D2D6',
          borderRadius: 12,
          marginTop: 40,
        }}
      >
        Только 17β-эстрадиол идентичен эстрогену, вырабатываемому в яичниках
        женщины.
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: 20,
          gridGap: 20,
        }}
      >
        <div className="accord_block_item">
          <div className="accord_block_img">
            <img src={accord_1} alt="" />
          </div>
          <h4 className="accord_block_h">ЭТИНИЛЭСТРАДИОЛ</h4>
          <div className="accord_block_text">
            Самый популярный. <br /> В составе почти всех КОК
          </div>
        </div>
        <div className="accord_block_item">
          <div className="accord_block_img">
            <img src={accord_2} alt="" />
          </div>
          <h4 className="accord_block_h">ЭСТРАДИОЛА ВАЛЕРАТ</h4>
          <div className="accord_block_text">Клайра</div>
        </div>
        <div className="accord_block_item accord_block_item__pink">
          <div className="accord_block_img">
            <img src={accord_3} alt="" />
          </div>
          <h4 className="accord_block_h">17β-ЭСТРАДИОЛ</h4>
          <div className="accord_block_text">
            Только в составе{' '}
            <b
              style={{
                fontWeight: 500,
              }}
            >
              Zoely®
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
