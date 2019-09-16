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
              Emaily <br />
              Free Fast and Accurate!
              <br />
              New Way for Survey
            </h3>
            <h5 className="header-h5">
              Easy to use with concise UI
              <br />
              Customize You unique Survey Question
            </h5>

            <HashLink smooth to="#functions">
              <a className="btn btn-full" href="#n">
                More Info
              </a>
            </HashLink>

            <HashLink smooth to="#plan">
              <a className="btn btn-ghost" href="#n">
                Choose My Plans
              </a>
            </HashLink>
          </div>
        </div>
        <div>
          <div className="row" id="functions">
            <h2>Emaily can do what u want!</h2>
            <p className="landing-long-copy">Free for U &mdash; All the Time</p>
          </div>

          <div className="row">
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                timeline
              </Icon>
              <h4 className="landing-h3">4 Steps to finish your Survey</h4>
              <p>
                EZ way to start your Survey Setting, just go straight to create
                the core of your Survey.
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                account_balance_wallet
              </Icon>
              <h4 className="landing-h3">Low monthly pay for Premium Plan</h4>
              <p>
                Free forever for Basic Plan user. Lowest market price, pay less
                money and get great Premium Functions
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                bookmarks
              </Icon>
              <h4 className="landing-h3">Concise layout with friendly UI</h4>
              <p>
                No complex logic, No Cumbersome feature set. You can master it
                in only 1 minute.
              </p>
            </div>
            <div className="col s3">
              <Icon className="icon-medium" style={{ fontSize: 80 }}>
                translate
              </Icon>
              <h4 className="landing-h3">Mutiple Language Sup</h4>
              <p>
                Use the unique language, and target your special client group
                accurately.
              </p>
            </div>
          </div>
          {/* --------PLAN --------------*/}
          <section id="plan" className="section">
            <div className="row ">
              <h2 className="plan-h2">Plans</h2>
              <p className="landing-long-copy">
                Free for U &mdash; All the Time
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
                      <span>unlimited</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Free for U Forever
                      </li>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Unlimited Survey Projects
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-full" href="#about-me">
                      You are here!
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
                      1.20AUD/
                      <span>Month</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Excel and .csv File Importable
                      </li>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Survey Result Exportable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-ghost" href="#about-me">
                      Upgrade Now
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
                      5.00 AUD/
                      <span>Month</span>
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Make Your Analysis Diagram
                      </li>
                      <li>
                        <Icon className="icon-small" style={{ fontSize: 16 }}>
                          check_circle
                        </Icon>
                        Analysis Diagram Exportable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-ghost" href="#about-me">
                      Upgrade Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div class="row">
              <div class="col s6">
                <ul class="footer-nav">
                  <li>
                    <HashLink smooth to="#functions">
                      Function
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#plan">
                      Plan
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div class="col s6">
                <ul class="social-links">
                  {/* <li>
                    <a href="https://github.com/NiMaGangFour" target="_blank">
                      <i class="icon ion-logo-github"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="#n">
                      <Icon className="icon-small" style={{ fontSize: 16 }}>
                        ring_volume
                      </Icon>
                      0416 542 666
                    </a>
                  </li>
                  <li>
                    <a href="#n">
                      <Icon className="icon-small" style={{ fontSize: 16 }}>
                        mail
                      </Icon>
                      NiMaGangThree@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <p>Copyright &copy; 2019 by Siyu. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Home);
