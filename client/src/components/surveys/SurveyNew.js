//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm.js";
import SurveyFormReview from "./SurveyFormReview.js";
import SurveyHeader from "./SurveyHeader.js";

class SurveyNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    console.log(this.state.showFormReview);
    if (this.state.showFormReview) {
      return (
        <div>
          <SurveyHeader subTitle="Please Confirm Your Survey " />
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        </div>
      );
    }

    return (
      <div>
        <SurveyHeader subTitle="Please Create Your Survey " />
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />{" "}
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
