import Bayer from 'components/Bayer';
import Catalog from 'components/Catalog';
import Home from 'components/Home';
import Pdf from 'components/Pdf';
import Product from 'components/Product';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route path={'/prezentation/:type/:name/:id'} component={() => <Pdf />} />
      <Route path={'/product/:id'} component={() => <Product />} />
      <Route path={'/catalog'} component={() => <Catalog />} />
      <Route path={'/bayer'} component={() => <Bayer />} />
      <Route path={'/'} component={() => <Home />} />
    </Switch>
  );
};
