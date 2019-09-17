import React, { Component } from "react";

import "./Survey.css";
class SurveyHeader extends Component {
  render() {
    return (
      <nav className="nav-SurveyHeader">
        <ul className="center-align">
          <h4 style={{ margin: "0px" }}>{this.props.subTitle}</h4>
        </ul>
      </nav>
    );
  }
}

export default SurveyHeader;
