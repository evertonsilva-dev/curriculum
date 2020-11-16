import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Home from 'src/pages/Home';
import Route from './Route';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} title="Everton Silva" />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
