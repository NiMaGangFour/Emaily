import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Home from "./Home";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew.js";
import "./css/Components.css";
// const Header = () => <h2>Header</h2>
// const Dashboard = () => <h2>Dashboard</h2>
// const SurveyNew = () => <h2>SurveyNew</h2>;
// const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
