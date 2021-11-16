import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ServiseWorker from 'scripts/ServiseWorker';
import { StoreProvider } from 'stores/rootStore';

import './styles.scss';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
      <ServiseWorker />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
