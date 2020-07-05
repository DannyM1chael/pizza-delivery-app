import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';
import Home from '../components/screens/home';

const Cart = lazy(() => import('../components/screens/cart'));
const Checkout = lazy(() => import('../components/screens/checkout'));

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path={URL.CART} component={Cart} />
    <Route exact path={URL.CHECKOUT} component={Checkout} />
  </Switch>
);
