import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import SubtaskCard from "./SubtaskCard";
const TaskApi = require("../../API/SiteSurveyApi").TaskApi;
const SubtaskApi = require("../../API/SiteSurveyApi").SubtaskApi;

class TaskPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: null,
      subtasks: []
    };
  }
  componentDidMount() {
    var taskId = this.props.match.params.id;
    
    this.setState({ 
      task: TaskApi.getTaskById(taskId),
      subtasks: SubtaskApi.getSubtasksByTaskId(taskId) 
    });    
  }
  render() {
    if(this.state.task){
    return (
      <div>
        <h1>
          <NavLink to={"/phase/"+this.state.task.phase_id} className="navbar-brand">
             {"< " + this.state.task.titleEng}
          </NavLink>
        </h1>
        <div>{this.state.subtasks.map(subtask =>(
          
        <SubtaskCard key={subtask.subtask_id} subtask={subtask}/>
        ))}</div>
      </div>
    )}
    else
    return (<div>No item found!</div>);
  }
}

TaskPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default TaskPage;
