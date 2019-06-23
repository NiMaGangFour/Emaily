//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm.js";
import SurveyFormReview from "./SurveyFormReview.js";

class SurveyNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    console.log(this.state.showFormReview);
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
