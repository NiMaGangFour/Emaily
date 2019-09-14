import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";
import "./css/Components.css";
import Logo_White from "./css/image/Logo_White_Emaily.png"; // with import

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <a href="/auth/google">
              <h5>Login With Google</h5>
            </a>
          </li>,
          <li>
            <a href="/auth/google">
              <h5>Login With Google</h5>
            </a>
          </li>,
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
    console.log(this.props.auth);
    return (
      <div className="header">
        <div className="row">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <img
              className="logo_white"
              src={Logo_White}
              alt="Emaily Logo White"
            ></img>
          </Link>
          <ul className="navigations">{this.renderContent()}</ul>
        </div>

        <div className="header-text-box">
          <h2>
            I'm Siyu,Passionate Front-End Developerand Javascript Developer
          </h2>
          <h4>
            My background is in programming. I currently work as a Web Developer
            at the NOVA SOFTWARE Pty. Ltd in Canberra.
          </h4>
          <a className="btn btn-full" href="#about-me">
            More Info
          </a>
          <a className="btn btn-ghost" href="#contact-me">
            Contact Us
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
