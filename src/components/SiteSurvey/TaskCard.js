import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const SubtaskApi = require("../../API/SiteSurveyApi").SubtaskApi;

function TaskCard(props) {
  const task = props.task;
  return (
      <div key={task.task_id}>
        <div className="card mb-2 d-inline-block">
          <div className="card-body">
            <p className="card-text">{task.titleEng}</p>
            <p className="card-text">
              <NavLink className="card-link" to={"/Task/" + task.task_id}>
              {SubtaskApi.getSubtasksByTaskId(task.task_id).length} Subtasks
              </NavLink>
            </p>
          </div>
        </div>
        <br />
      </div>
    
  );
}
TaskCard.propTypes = {
  task: PropTypes.object.isRequired
};
export default TaskCard;
