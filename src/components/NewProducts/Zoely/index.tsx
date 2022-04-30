import React from 'react';
import Page from 'UI/Page';

import styles from 'components/common.module.scss';
import style from 'components/Product/styles.module.scss';
import clsx from 'clsx';
import { products } from 'contants';

import one from './img/1.jpg';
import second from './img/2.jpg';
import tree from './img/3.jpg';
import four from './img/4.jpg';
import graph from './img/graph.png';
import finish from './img/finish.jpg';
import q from './img/q.svg';
import BlockAccord from './BlockAccord';
import BlockOral from './BlockOral';
import ItemPlus from './ItemPlus';

export type pdfType = 'Иструкции' | 'Материалы' | 'Презентации' | '';

export default () => {
  const {
    name,
    subtitle,
    description,
    img,
    prezentations,
    materials,
    addedDescription,
    picture,
    instructions,
  } = products.find(i => i.id === 'eoeli')!;

  return (
    <Page backText="Продукты">
      <div className={style.buttons}>
        {instructions.length !== 0 && (
          <div
            onClick={() => {}}
            className={clsx(styles.mainBtn, styles.shitEffects)}
          >
            Иструкции
          </div>
        )}
        {materials.length !== 0 && (
          <div
            onClick={() => {}}
            className={clsx(styles.mainBtn, styles.shitEffects)}
          >
            Материалы
          </div>
        )}
        {prezentations.length !== 0 && (
          <div
            onClick={() => {}}
            className={clsx(styles.mainBtn, styles.shitEffects)}
          >
            Презентации
          </div>
        )}
      </div>
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
          }}
          className="box"
        ></div>
      </div>
      <div style={{ height: 20 }}></div>
      <div
        style={{ marginBottom: 0 }}
        className={clsx(style.productLine, styles.shitEffects)}
      >
        <img
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            zIndex: 1,
          }}
          src={picture}
          alt=""
        />
        <div className={style.container}>
          <div>
            <img
              style={{
                marginBottom: 20,
              }}
              className={style.productPic}
              src={img}
              alt=""
            />
            <div
              style={{
                color: '#2F2F34',
                marginBottom: 5,
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              {name}
            </div>
            <div
              style={{
                color: '#2F2F34',
                marginBottom: 20,
                fontSize: 18,
              }}
            >
              {subtitle}
            </div>
            <div>{description}</div>
          </div>
          {addedDescription && (
            <div
              style={{
                marginLeft: 20,
              }}
            >
              <img
                style={{
                  marginBottom: 20,
                }}
                className={style.productPic}
                src={addedDescription.img}
                alt=""
              />
              <div
                style={{
                  marginBottom: 5,
                  fontSize: 30,
                  fontWeight: 'bold',
                }}
              >
                {addedDescription.name}
              </div>
              <div
                style={{
                  marginBottom: 20,
                  fontSize: 18,
                }}
              >
                {addedDescription.subtitle}
              </div>
              <div>{addedDescription.description}</div>
            </div>
          )}
        </div>
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
            isWhite
            text={
              'Содержит номегэстрола ацетат — высокоселективный прогестаген на основе прогестерона, и 17β-эстрадиол, который структурно идентичен эндогенному эстрогену'
            }
          />
          <ItemPlus
            isWhite
            text={
              'Отсутствие влияния на показатели артериального давления, углеводный обмен, систему гемостаза, минеральную плотность костей, появление акне'
            }
          />
          <ItemPlus
            isWhite
            text={
              'Монофазный режим дозирования: 24 активных таблетки и 4 таблетки плацебо'
            }
          />
          <ItemPlus
            isWhite
            text={
              'Высокая контрацептивная эффективность — более 99% (индекс Перля 0,38)'
            }
          />
          <ItemPlus
            isWhite
            text={
              'Более короткое и менее интенсивное кровотечение отмены по сравнению с другими КОК'
            }
          />
          <ItemPlus
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
