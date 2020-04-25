import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Timer from '../pages/Timer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Timer} />
      </Switch>
    </BrowserRouter>
  );
}
