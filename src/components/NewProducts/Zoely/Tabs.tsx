import style from 'components/Product/styles.module.scss';
import clsx from 'clsx';
import styles from 'components/common.module.scss';
import React, { useState } from 'react';
import PrezentationItem from 'components/Product/PrezentationItem';
import Popup from 'UI/Popup';
import { pdfType } from 'components/Product';

export default ({ openInstruction }: any) => {
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
        <div
          onClick={openInstruction}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Иструкция
        </div>
        <div
          onClick={() => selectButton('Материалы')}
          className={clsx(styles.mainBtn, styles.shitEffects)}
        >
          Материалы
        </div>
        <div
          onClick={() => {}}
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
      </Popup>
    </div>
  );
};
