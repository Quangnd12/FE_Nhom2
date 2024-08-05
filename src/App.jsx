import React from "react";
import Client from "./Client/src/App";
import AdminLayout from "./Admin/src/layouts/admin";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";

const App = () => {
  return (
    <Provider store={Store}>
      <Switch>
        <Route
          path="/admin"
          component={AdminLayout}
        />
        <Route
          path="/"
          component={Client}
        />
        <Redirect
          from="*"
          to="/"
        />
      </Switch>
    </Provider>
  );
};

export default App;
