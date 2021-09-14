import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "Routes/routes";
import { URL_Test } from "Helpers/urls";
import { useSelector } from "react-redux";
import { Loader } from "Helpers/spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admin = () => {
  const Loadershow = useSelector((state) => state.loder);
  let getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      return (
        <Route
          path={prop.path}
          exact={prop.exact}
          component={prop.component}
          key={key}
        />
      );
    });
  };
  return (
    <>
      {Loadershow ? <Loader /> : null}
      <ToastContainer />
      <Switch>
        {getRoutes(routes)}
        <Redirect from="*" to={URL_Test} />
      </Switch>
    </>
  );
};

export default Admin;
