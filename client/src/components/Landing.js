import React from "react";
import "./css/Components.css";
import Icon from "@material-ui/core/Icon";
const Landing = () => {
  return (
    <div>
      <div className="row">
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
            I am passionate about writing code. In my spare time, I often learn
            about web development on the web course of udemy and share my
            experience with my peers on Stack Overflow. I am also a registered
            member of ACS.
          </p>
        </div>
        <div className="col s3">
          <Icon className="icon-medium" style={{ fontSize: 80 }}>
            account_balance_wallet
          </Icon>
          <h4 className="landing-h3">I'm Passionate About Coding!</h4>
          <p>
            I am passionate about writing code. In my spare time, I often learn
            about web development on the web course of udemy and share my
            experience with my peers on Stack Overflow. I am also a registered
            member of ACS.
          </p>
        </div>
        <div className="col s3">
          <Icon className="icon-medium" style={{ fontSize: 80 }}>
            bookmarks
          </Icon>
          <h4 className="landing-h3">I'm Passionate About Coding!</h4>
          <p>
            I am passionate about writing code. In my spare time, I often learn
            about web development on the web course of udemy and share my
            experience with my peers on Stack Overflow. I am also a registered
            member of ACS.
          </p>
        </div>
        <div className="col s3">
          <Icon className="icon-medium" style={{ fontSize: 80 }}>
            translate
          </Icon>
          <h4 className="landing-h3">I'm Passionate About Coding!</h4>
          <p>
            I am passionate about writing code. In my spare time, I often learn
            about web development on the web course of udemy and share my
            experience with my peers on Stack Overflow. I am also a registered
            member of ACS.
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
                    <i class="icon ion-md-bookmarks icon-margin"></i>Bachelor
                    degree of IT
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
                    <i class="icon ion-md-bookmarks icon-margin"></i>Bachelor
                    degree of IT
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
  );
};

export default Landing;
