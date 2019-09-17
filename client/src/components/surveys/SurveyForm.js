//SurveyFrom: Shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField.js";
import validateEmails from "../../utils/validateEmails.js";
import formFields from "./formFields.js";
import SurveyHeader from "./SurveyHeader.js";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, icon }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          icon={icon}
          component={SurveyField}
          type="text"
        />
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <p>SurveyForm!</p>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || " ");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value!";
    }
  });

  // if (!values.title) {
  //   errors.title = "You must provide a title";
  // }
  // if (!values.subject) {
  //   errors.subject = "You must provide a subject";
  // }
  // if (!values.body) {
  //   errors.body = "You must provide a body";
  // }
  // if (!values.emails) {
  //   errors.emails = "You must provide a email";
  // }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
