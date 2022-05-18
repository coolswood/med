import React, { useState } from 'react';
import Page from 'UI/Page';

import one from './img/1.jpg';
import second from './img/2.jpg';
import tree from './img/3.jpg';
import four from './img/4.jpg';
import graph from './img/graph.png';
import fon from './img/fon.png';
import prod from './img/prod.png';
import finish from './img/finish.jpg';
import q from './img/q.svg';
import BlockAccord from './BlockAccord';
import BlockOral from './BlockOral';
import ItemPlus from './ItemPlus';
import BlockWhite from './BlockWhite';
import Tabs from './Tabs';
import Overlay from 'UI/Overlay';
import Instructions from './overlays/Instructions';

export default () => {
  const [overContent, setOverContent] = useState<any>(null);

  return (
    <Page backText="Продукты">
      {overContent && (
        <Overlay onClose={() => setOverContent(null)}>{overContent}</Overlay>
      )}
      <Tabs openInstruction={() => setOverContent(<Instructions />)} />
      <div className="row row-2">
        <div
          style={{
            height: 220,
          }}
          className="box"
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <img width={60} height={60} src={q} alt="" />
            <div
              style={{
                marginLeft: 20,
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#fff',
                }}
              >
                Женщины часто отказываются от приёма контрацепции, т.к. считают,
                что нет идеального безопасного контрацептива…
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  color: '#fff',
                  marginTop: 10,
                }}
              >
                Но такой контрацептив уже создан!
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 220,
            background: `url(${one})`,
            backgroundSize: 'cover',
          }}
          className="box"
        ></div>
      </div>
      <div style={{ height: 20 }}></div>
      <div
        style={{
          background: '#F9D2D6',
          position: 'relative',
        }}
        className="box"
      >
        <div
          style={{
            width: 380,
            padding: 34,
          }}
        >
          <img
            style={{
              width: 260,
              height: 170,
            }}
            src={prod}
            alt=""
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#2F2F34',
              marginTop: 20,
            }}
          >
            Zoely®
          </div>
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: '#fff',
              marginTop: 20,
            }}
          >
            ИННОВАЦИОННЫЙ КОК
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: '#2F2F34',
              marginTop: 10,
            }}
          >
            Первый монофазный эстрадиол содержащий комбинированный оральный
            контрацептив.
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
          }}
          src={fon}
          alt=""
        />
      </div>
      <div style={{ height: 20 }}></div>
      <BlockAccord />
      <div style={{ height: 20 }}></div>
      <BlockOral />
      <div style={{ height: 20 }}></div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            height: 350,
            width: 412,
            background: `url(${second})`,
            marginRight: 20,
            flexShrink: 0,
          }}
          className="box"
        ></div>
        <div className="box">
          <h3
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: '#F9D2D6',
            }}
          >
            NOMAC
          </h3>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              isWhite
              text={
                'Пероральный прием NOMAC даже в дозах до 5 мг/сутки существенно не влияет на параметры обмена и гомеостаза1, не оказывает заметного прямого действия на кровеносные сосуды'
              }
            />
          </div>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              isWhite
              text={
                'NOMAC не оказывает значимого влияния на уровень глюкозы в крови натощак или уровень инсулина; уровень общего холестерина, ЛПВП, ЛПНП; уровни фибриногена и плазминогена'
              }
            />
          </div>
        </div>
      </div>
      <div style={{ height: 20 }}></div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div className="box">
          <h3
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#F9D2D6',
            }}
          >
            Zoely® удобен в случае пропущенной таблетки из-за длительного
            периода полувыведения
          </h3>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              isPlus
              isWhite
              text={
                'Период полувыведения Zoely® составляет 46 часов. Это больше, чем у любого другого КОК, представленного сегодня на рынке контрацептивов'
              }
            />
          </div>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <ItemPlus
              isPlus
              isWhite
              text={
                'Восстановление фертильности после его применения составляет в среднем 21 день, что согласуется с данными по другим оральным контрацептивам'
              }
            />
          </div>
        </div>
        <div
          style={{
            height: 350,
            width: 412,
            background: `url(${tree})`,
            marginLeft: 20,
            flexShrink: 0,
            backgroundSize: 'cover',
          }}
          className="box"
        ></div>
      </div>
      <div style={{ height: 20 }}></div>
      <BlockWhite />
      <div style={{ height: 20 }}></div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div className="box">
          <h3
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#F9D2D6',
            }}
          >
            Zoely® удобен в случае пропущенной таблетки из-за длительного
            периода полувыведения
          </h3>
          <img
            style={{
              height: 380,
            }}
            src={graph}
            alt=""
          />
        </div>
        <div
          style={{
            width: 412,
            background: `url(${four})`,
            marginLeft: 20,
            flexShrink: 0,
            backgroundSize: 'cover',
          }}
          className="box"
        ></div>
      </div>
      <div style={{ height: 20 }}></div>
      <div className="box">
        <h3
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#F9D2D6',
            marginBottom: 40,
          }}
        >
          Достоинства препарата Zoely®
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridGap: 20,
          }}
        >
          <ItemPlus
            isPlus
            isWhite
            text={
              'Содержит номегэстрола ацетат — высокоселективный прогестаген на основе прогестерона, и 17β-эстрадиол, который структурно идентичен эндогенному эстрогену'
            }
          />
          <ItemPlus
            isPlus
            isWhite
            text={
              'Отсутствие влияния на показатели артериального давления, углеводный обмен, систему гемостаза, минеральную плотность костей, появление акне'
            }
          />
          <ItemPlus
            isPlus
            isWhite
            text={
              'Монофазный режим дозирования: 24 активных таблетки и 4 таблетки плацебо'
            }
          />
          <ItemPlus
            isPlus
            isWhite
            text={
              'Высокая контрацептивная эффективность — более 99% (индекс Перля 0,38)'
            }
          />
          <ItemPlus
            isPlus
            isWhite
            text={
              'Более короткое и менее интенсивное кровотечение отмены по сравнению с другими КОК'
            }
          />
          <ItemPlus
            isPlus
            isWhite
            text={
              'Удобен в случае пропущенной таблетки из-за длительного периода полувыведения (46 часов)'
            }
          />
        </div>
      </div>
      <div style={{ height: 20 }}></div>
      <div
        style={{
          height: 580,
          background: `url(${finish})`,
          width: '100%',
          backgroundSize: 'cover',
        }}
        className="box"
      ></div>
    </Page>
  );
};
