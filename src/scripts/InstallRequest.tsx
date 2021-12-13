import React from 'react';
import Popup from 'UI/Popup';
import install from './install-pwa-ios.jpg';

export default () => {
  if (window.screen.width > 900) {
    return null;
  }

  return (
    <Popup opened={true} togglePopup={() => {}} title={'Установите приложение'}>
      <div>
        Вам следует установить приложение для дальнейшего использования.
      </div>
      <div>
        Для этого нажмите кнопку "Поделиться", далее выберите пункт "Добавить на
        главный экран".
      </div>
      <img
        style={{
          marginTop: 20,
        }}
        width="100%"
        src={install}
        alt=""
      />
    </Popup>
  );
};
