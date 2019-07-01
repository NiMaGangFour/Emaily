import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  state = {
    sortByDate: false,
    sortByRespondedNumber: false
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveysSortBy() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn"
          onClick={() => this.setState({ ortByDate: true })}
        >
          <i className="material-icons left">date_range</i>Date
        </a>
        <a
          className="waves-effect waves-light btn"
          onClick={() => this.setState({ sortByRespondedNumber: true })}
        >
          <i className="material-icons left">format_list_numbered</i>Responded
          Number
        </a>
        <a className="waves-effect waves-light btn">
          <i className="material-icons right">cloud</i>button
        </a>
      </div>
    );
  }

  renderSurveys() {
    // console.log("this.props.surveys ==>", this.props.surveys);
    console.log("this.state ===>", this.state);

    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On:{new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderSurveysSortBy()}</div>
        <div>{this.renderSurveys()}</div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
