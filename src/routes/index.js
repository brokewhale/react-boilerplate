import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../pages/test";
import PayDonate from "../pages/widget";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Test} path="/" exact />
        <Route component={PayDonate} path="/donate" />
      </Switch>
    </Router>
  );
};

export default Routes;
