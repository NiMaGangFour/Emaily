import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyForm.js";

class SurveyForm extends Component {
  renderFields() {
    <div>
      <Field type="text" name="surveyTitle" component={SurveyField} />
    </div>;
  }

  render() {
    return (
      <div>
        SurveyForm!
        <form
          onSubmit={this.props.handleSubmit(values => {
            console.log(values);
          })}
        >
          // <Field type="text" name="surveyTitle" component="input" />
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
