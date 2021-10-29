import Home from 'components/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
