import Bayer from 'components/Bayer';
import Catalog from 'components/Catalog';
import Pdf from 'components/Pdf';
import Product from 'components/Product';
import Zoely from 'components/NewProducts/Zoely';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import Instructions from 'components/NewProducts/Zoely/overlays/Instructions';
import Video from 'components/Video';

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
      <Route path={'/video/:type/:id'} component={() => <Video />} />
      <Route
        exact
        path={'/product/eoeli/instruction'}
        component={() => <Instructions />}
      />
      <Route exact path={'/product/eoeli'} component={() => <Zoely />} />
      <Route path={'/product/:id'} component={() => <Product />} />
      <Route path={'/bayer'} component={() => <Bayer />} />
      <Route path={'/'} component={() => <Catalog />} />
      {/*<Route path={'/'} component={() => <Home />} />*/}
    </Switch>
  );
};
