import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ServiseWorker from 'scripts/ServiseWorker';
import { StoreProvider } from 'stores/rootStore';

import './styles.scss';

import App from './App';

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);

  dayjs.locale(locale);
}

dynamicActivate('ru');

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <I18nProvider i18n={i18n}>
        <App />
        <ServiseWorker />
      </I18nProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
