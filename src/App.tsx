import React from 'react';
import { Route } from 'react-router-dom';
import Root from 'routes/Root';

export default () => {
  return (
    <Route
      component={() => (
        <>
          <Root />
        </>
      )}
    />
  );
};
