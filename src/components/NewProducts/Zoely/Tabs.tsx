import style from 'components/Product/styles.module.scss';
import clsx from 'clsx';
import styles from 'components/common.module.scss';
import React, { useState } from 'react';
import PrezentationItem from 'components/Product/PrezentationItem';
import Popup from 'UI/Popup';
import { pdfType } from 'components/Product';
import { Link } from 'react-router-dom';

export default () => {
  const [selectedButton, setSelectedButton] = useState<pdfType>('');
  const [openedPopup, setOpenedPopup] = useState(false);

  const selectButton = (button: pdfType) => {
    setSelectedButton(button);
    setOpenedPopup(true);
  };

  const removeSelected = () => {
    setOpenedPopup(false);
  };

  return (
    <div>
      <div className={style.buttons}>
        <Link
          to={'/product/eoeli/instruction'}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Иструкция
        </Link>
        <div
          onClick={() => selectButton('Материалы')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Материалы
        </div>
        <div
          onClick={() => selectButton('Видео')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Видео
        </div>
      </div>
      <Popup
        opened={openedPopup}
        togglePopup={removeSelected}
        title={selectedButton}
      >
        {selectedButton === 'Материалы' &&
          [
            {
              name: 'ZOELY исследования (Канада)',
              pdfName: 'Australian-Zoely-Sales-Aid',
              forceVertical: false,
            },
            {
              name: 'ZOELY исследования (Австралия)',
              pdfName: 'Zoely-Sales-Aid-UK_ru',
              forceVertical: false,
            },
          ].map(i => (
            <PrezentationItem
              key={i.pdfName}
              name={i.name}
              forceVertical={i.forceVertical}
              pdfName={i.pdfName}
              type={selectedButton}
            />
          ))}
        {selectedButton === 'Видео' &&
          [
            {
              name: 'We Zoely',
              pdfName: 'P4DR5deylVE',
            },
            {
              name: 'Гормональные контрацептивы',
              pdfName: '1v6IiJUNQ70',
            },
            {
              name: 'Тапильская Н.И "О контрацепции"',
              pdfName: '30mZH58kobA',
            },
          ].map(i => (
            <PrezentationItem
              key={i.pdfName}
              name={i.name}
              pdfName={i.pdfName}
              type={selectedButton}
              icon={'video'}
            />
          ))}
      </Popup>
    </div>
  );
};
