import "./App.css";
import { Route, Switch } from "react-router-dom";
import DatabaseManipulation from "./containers/DatabaseManipulation/DatabaseManipulation";
import DatabaseTrigger from "./containers/DatabaseTrigger/DatabaseTrigger";
import DatabaseFunction from "./containers/DatabaseFunction/DatabaseFunction";
import DatabaseProcedure from "./containers/DatabaseProcedure/DatabaseProcedure";
import DatabaseManage from "./containers/DatabaseManage/DatabaseManage";
import Layout from "./hoc/Layout/Layout";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    routes: [
      { path: "/", component: DatabaseManage, title: "DatabaseManage" },
      {
        path: "/dml",
        component: DatabaseProcedure,
        title: "DatabaseProcedure",
      },
      {
        path: "/trigger",
        component: DatabaseFunction,
        title: "DatabaseFunction",
      },
    ],
  };
  render() {
    const route = (
      <Switch>
        {this.state.routes.map((route) => (
          <Route path={route.path} component={route.component} />
        ))}
      </Switch>
    );
    return (
      <div className="App">
        <Layout routes={this.state.routes}>{route}</Layout>
      </div>
    );
  }
}
