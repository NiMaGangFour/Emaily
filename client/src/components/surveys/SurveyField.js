// SurveyField contains logic to render a single lablel and text input
import React from "react";

export default ({ input, label, icon, meta: { error, touched } }) => {
  console.log(label);
  console.log(input);
  return (
    <div className="card" style={{ marginBottom: "45px" }}>
      <div className="valign-wrapper">
        <i className="material-icons prefix">{icon}</i>
        <label
          className="black-text"
          style={{ float: "right", marginBottom: "2px" }}
          for={label}
        >
          {label}
        </label>
      </div>
      <input {...input} type="text" />

      {/* <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div> */}

      <div className="red-text" style={{ float: "right", marginBottom: "2px" }}>
        {touched && error}
      </div>
    </div>
  );
};
