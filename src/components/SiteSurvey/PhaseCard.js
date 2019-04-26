import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const PhaseApi = require("../../API/SiteSurveyApi").PhaseApi;

function PhaseCard(props) {
  const phase = props.phase;
  return (
    <div key={phase.phase_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <img
            className="card-img-top"
            src="../images/pluralsight-logo.png"
            alt="Card image cap"
          />
          <p className="card-text">{phase.titleEng}</p>
          <p className="card-text">Phase {phase.OrderNum}</p>
          <p className="card-text">{phase.descEng}</p>
          <p className="card-text">
            {PhaseApi.getCompletedSubtasksCount(phase.phase_id)}
          </p>
          <h2 className="card-title h5">
            <NavLink className="card-link" to={"/phase/" + phase.phase_id}>
              VIEW
            </NavLink>
          </h2>
        </div>
      </div>
      <br />
    </div>
  );
}
PhaseCard.propTypes = {
  phase: PropTypes.object.isRequired
};
export default PhaseCard;
