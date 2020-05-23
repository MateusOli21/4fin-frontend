import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Categories from '../pages/Categories';
import Purchases from '../pages/Purchases';
import CreateCategory from '../pages/CreateCategory';
import CreatePurchase from '../pages/CreatePurchase';
import EditCategory from '../pages/EditCategory';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route exact path="/categories" component={Categories} isPrivate />
      <Route path="/create_category" component={CreateCategory} isPrivate />
      <Route exact path="/purchases" component={Purchases} isPrivate />
      <Route path="/create_purchase" component={CreatePurchase} isPrivate />
      <Route path="/categories/:id" component={EditCategory} isPrivate />
    </Switch>
  );
}
