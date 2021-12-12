import React, { useState } from 'react';
import Page from 'UI/Page';

import style from './styles.module.scss';
import styles from 'components/common.module.scss';
import { useParams } from 'react-router-dom';
import { products } from 'contants';
import Popup from 'UI/Popup';
import PrezentationItem from './PrezentationItem';

export default () => {
  const { id } = useParams<{ id: any }>();
  const [selectedButton, setSelectedButton] = useState('');
  const [openedPopup, setOpenedPopup] = useState(false);

  const { name, subtitle, description, img, prezentations } = products.find(
    i => i.id === id
  )!;

  const selectButton = (button: string) => {
    setSelectedButton(button);
    setOpenedPopup(true);
  };

  const removeSelected = () => {
    setOpenedPopup(false);
  };

  return (
    <Page>
      <div className={style.productLine}>
        <div className={style.container}>
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
      </div>
      <div className={style.buttons}>
        <div
          onClick={() => selectButton('Иструкции')}
          className={styles.mainBtn}
        >
          Иструкции
        </div>
        <div
          onClick={() => selectButton('Материалы')}
          className={styles.mainBtn}
        >
          Материалы
        </div>
        <div
          onClick={() => selectButton('Презентации')}
          className={styles.mainBtn}
        >
          Презентации
        </div>
      </div>
      <Popup
        opened={openedPopup}
        togglePopup={removeSelected}
        title={selectedButton}
      >
        {prezentations.map(i => (
          <PrezentationItem name={i.name} pdfName={i.pdfName} />
        ))}
      </Popup>
    </Page>
  );
};
