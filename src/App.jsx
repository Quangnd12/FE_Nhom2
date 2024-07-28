import React from 'react';
import Client from './Client/src/App';
import AdminLayout from './Admin/src/layouts/admin';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/admin" component={AdminLayout} />
      <Route path="/" component={Client } />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
