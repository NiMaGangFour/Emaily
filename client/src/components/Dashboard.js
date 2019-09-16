import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import SurveyList from "./surveys/SurveyList.js";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
