import React, { Component } from "react";
import { connect } from "react-redux";

import Payments from "./Payments";
import "./css/Components.css";
class Header extends Component {
  renderHeader() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <a href="/auth/google">
              <h5>Login With Google</h5>
            </a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <div>
        <nav>
          {" "}
          <ul className="right">{this.renderHeader()}</ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
