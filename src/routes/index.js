import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../pages/test";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Test} />
      </Switch>
    </Router>
  );
};

export default Routes;
