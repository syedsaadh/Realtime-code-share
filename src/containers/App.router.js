import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage, CodingPage } from "./pages/";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route path="/:session" component={CodingPage} />
        </React.Fragment>
      </Router>
    );
  }
}
