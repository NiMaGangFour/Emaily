import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField.js";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipients List", name: "emails" }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          component={SurveyField}
          type="text"
        />
      );
    });
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
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
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
  form: "surveyForm"
})(SurveyForm);
