import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login';
import Wallet from '../Wallet';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/carteira" component={ Wallet } />
  </Switch>
);

export default AppRoutes;
