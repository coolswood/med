import Bayer from 'components/Bayer';
import Catalog from 'components/Catalog';
import Home from 'components/Home';
import Pdf from 'components/Pdf';
import Product from 'components/Product';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Sentry from '@sentry/react';

export default () => {
  useEffect(() => {
    Sentry.init({
      dsn: 'https://cf9d659b222d4ebc962c4ca41adc7e1f@o309928.ingest.sentry.io/6119385',
      tracesSampleRate: 1.0,
    });
  }, []);

  return (
    <Switch>
      <Route
        path={'/prezentation/:type/:name/:id/:forceVertical'}
        component={() => <Pdf />}
      />
      <Route path={'/product/:id'} component={() => <Product />} />
      <Route path={'/bayer'} component={() => <Bayer />} />
      <Route path={'/'} component={() => <Catalog />} />
      {/*<Route path={'/'} component={() => <Home />} />*/}
    </Switch>
  );
};
