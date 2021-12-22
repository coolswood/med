import React, { useState } from 'react';
import Page from 'UI/Page';

import style from './styles.module.scss';
import styles from 'components/common.module.scss';
import { useParams } from 'react-router-dom';
import { products } from 'contants';
import Popup from 'UI/Popup';
import PrezentationItem from './PrezentationItem';
import clsx from 'clsx';

export type pdfType = 'Иструкции' | 'Материалы' | 'Презентации' | '';

export default () => {
  const { id } = useParams<{ id: any }>();
  const [selectedButton, setSelectedButton] = useState<pdfType>('');
  const [openedPopup, setOpenedPopup] = useState(false);

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
  } = products.find(i => i.id === id)!;

  const selectButton = (button: pdfType) => {
    setSelectedButton(button);
    setOpenedPopup(true);
  };

  const removeSelected = () => {
    setOpenedPopup(false);
  };

  return (
    <Page backText="Продукты">
      <div className={clsx(style.productLine, styles.shitEffects)}>
        <img
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            zIndex: -1,
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
                color: '#432E33',
                marginBottom: 5,
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              {name}
            </div>
            <div
              style={{
                color: '#432E33',
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
                  color: '#432E33',
                  marginBottom: 5,
                  fontSize: 30,
                  fontWeight: 'bold',
                }}
              >
                {addedDescription.name}
              </div>
              <div
                style={{
                  color: '#432E33',
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
      <div className={style.buttons}>
        <div
          onClick={() => selectButton('Иструкции')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Иструкции
        </div>
        <div
          onClick={() => selectButton('Материалы')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Материалы
        </div>
        <div
          onClick={() => selectButton('Презентации')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Презентации
        </div>
      </div>
      <Popup
        opened={openedPopup}
        togglePopup={removeSelected}
        title={selectedButton}
      >
        {selectedButton === 'Презентации' &&
          prezentations.map(i => (
            <PrezentationItem
              key={i.pdfName}
              name={i.name}
              forceVertical={i.forceVertical}
              pdfName={i.pdfName}
              type={selectedButton}
            />
          ))}
        {selectedButton === 'Материалы' &&
          materials.map(i => (
            <PrezentationItem
              key={i.pdfName}
              name={i.name}
              forceVertical={i.forceVertical}
              pdfName={i.pdfName}
              type={selectedButton}
            />
          ))}
        {selectedButton === 'Иструкции' &&
          instructions.map(i => (
            <PrezentationItem
              key={i.pdfName}
              name={i.name}
              forceVertical={i.forceVertical}
              pdfName={i.pdfName}
              type={selectedButton}
            />
          ))}
      </Popup>
    </Page>
  );
};
