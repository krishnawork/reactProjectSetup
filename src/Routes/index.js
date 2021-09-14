import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { URL_LOGIN } from "Helpers/urls";
import ProtectedRoute from "./private";

// COMPONENTS
import Login from "../Components/Login";

import { createBrowserHistory } from "history";

import Layout from "../app.js";

const hist = createBrowserHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route exact path={URL_LOGIN} component={Login} />
      <ProtectedRoute>
        <Route path="/" render={(props) => <Layout {...props} />} />
      </ProtectedRoute>
    </Switch>
  </Router>
);
