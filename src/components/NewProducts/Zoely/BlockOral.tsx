import React from 'react';
import { Link } from 'react-router-dom';

import group from './img/group.png';
import ItemPlus from './ItemPlus';

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
        Zoely® — ПЕРВЫЙ МОНОФАЗНЫЙ ЭСТРАДИОЛ СОДЕРЖАЩИЙ КОМБИНИРОВАННЫЙ ОРАЛЬНЫЙ
        КОНТРАЦЕПТИВ
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '20px',
          marginTop: 40,
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #F9D2D6',
            boxSizing: 'border-box',
            padding: '20px',
            borderRadius: 12,
            minHeight: 270,
          }}
        >
          <h4
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#2F2F34',
            }}
          >
            Zoely® содержит{' '}
            <Link className="bluer_link" to={'/product/eoeli/instruction'}>
              номегэстрола ацетат (NOMAC)
            </Link>{' '}
            2,5 мг в сочетании с 17β-эстрадиолом (Е2) 1,5 мг
          </h4>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              text={
                '17β-эстрадиол в препарате Zoely® биологически идентичен\n' +
                '                эндогенному эстрогену, вырабатывающемуся в яичниках'
              }
            />
          </div>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              text="номегэстрола ацетат (NOMAC) представляет собой химическое
                вещество, которое по своей структуре подобно прогестерону"
            />
          </div>
        </div>
        <div
          style={{
            background: '#F9D2D6',
            border: '1px solid #F7E5E0',
            boxSizing: 'border-box',
            padding: '20px',
            borderRadius: 12,
            minHeight: 270,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img height={200} src={group} alt="" />
        </div>
      </div>
    </div>
  );
};
