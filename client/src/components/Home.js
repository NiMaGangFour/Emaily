import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import ReactDOM from "react-dom";
import { HashLink } from "react-router-hash-link";

import Payments from "./Payments";
import "./css/Components.css";
import Logo_White from "./css/image/Logo_White_Emaily.png";

class Home extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <HashLink smooth to="#functions">
              <h5>Functions</h5>
            </HashLink>
            {/* <Link onClick={this.handleScroll.bind("1")}>
              <h5>Functions</h5>
            </Link> */}
          </li>,
          <li>
            <HashLink smooth to="#plan">
              <h5>Plans</h5>
            </HashLink>
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
    return (
      <div>
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
            <h3>
              I'm Siyu,Passionate Front-End Developerand Javascript Developer
            </h3>
            <h5 className="header-h5">
              My background is in programming. I currently work as a Web
              Developer at the NOVA SOFTWARE Pty. Ltd in Canberra.
            </h5>
            <a className="btn btn-full" href="#about-me">
              More Info
            </a>
            <a className="btn btn-ghost" href="#contact-me">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <div className="row" id="functions">
            <h2>Emaily can do what u want!</h2>
            <p className="landing-long-copy">
              Passion and Mission in Web &mdash; Front-end Developer
            </p>
          </div>

          <div className="row">
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                timeline
              </Icon>
              <h4 className="landing-h3">I'm Passionate About Coding!</h4>
              <p>
                I am passionate about writing code. In my spare time, I often
                learn about web development on the web course of udemy and share
                my experience with my peers on Stack Overflow. I am also a
                registered member of ACS.
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                account_balance_wallet
              </Icon>
              <h4 className="landing-h3">I'm Passionate About Coding!</h4>
              <p>
                I am passionate about writing code. In my spare time, I often
                learn about web development on the web course of udemy and share
                my experience with my peers on Stack Overflow. I am also a
                registered member of ACS.
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                bookmarks
              </Icon>
              <h4 className="landing-h3">I'm Passionate About Coding!</h4>
              <p>
                I am passionate about writing code. In my spare time, I often
                learn about web development on the web course of udemy and share
                my experience with my peers on Stack Overflow. I am also a
                registered member of ACS.
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                translate
              </Icon>
              <h4 className="landing-h3">I'm Passionate About Coding!</h4>
              <p>
                I am passionate about writing code. In my spare time, I often
                learn about web development on the web course of udemy and share
                my experience with my peers on Stack Overflow. I am also a
                registered member of ACS.
              </p>
            </div>
          </div>
          {/* --------PLAN --------------*/}
          <section id="plan" className="section">
            <div className="row ">
              <h2 className="plan-h2">Plans</h2>
              <p className="landing-long-copy">
                Passion and Mission in Web &mdash; Front-end Developer
              </p>
            </div>

            <div className="row">
              <div className="col s4">
                <div class="plan-box">
                  <div>
                    <Icon className="icon-medium" style={{ fontSize: 80 }}>
                      brightness_low
                    </Icon>
                    <h3>Free Trial </h3>
                    <p className="position">
                      0.00 AUD/
                      <span>Ulimited</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          location_searching
                        </Icon>
                        First 30 Surveys for Free!
                      </li>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          location_searching
                        </Icon>
                        Bachelor degree of IT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-full" href="#about-me">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <div class="plan-box">
                  <div>
                    <Icon className="icon-medium" style={{ fontSize: 80 }}>
                      brightness_medium
                    </Icon>
                    <h3>premium </h3>
                    <p class="position">
                      7.20AUD/
                      <span>Month</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <i class="icon ion-md-bookmarks icon-margin"></i>Master
                        degree of IT{" "}
                      </li>
                      <li>
                        <i class="icon ion-md-bookmarks icon-margin"></i>
                        Bachelor degree of IT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-full" href="#about-me">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <div class="plan-box">
                  <div>
                    <Icon className="icon-medium" style={{ fontSize: 80 }}>
                      brightness_high
                    </Icon>
                    <h3>premium Plus+ </h3>
                    <p class="position">
                      9.00/
                      <span>Month</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <i class="icon ion-md-bookmarks icon-margin"></i>Master
                        degree of IT{" "}
                      </li>
                      <li>
                        <i class="icon ion-md-bookmarks icon-margin"></i>
                        Bachelor degree of IT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-full" href="#about-me">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Home);
