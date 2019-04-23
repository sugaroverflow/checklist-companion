import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import SiteSurveyPage from "./SiteSurvey/SiteSurveyPage";
import CategoryPage from "./SiteSurvey/CategoryPage";
import PhasePage from "./SiteSurvey/PhasePage";
import TaskPage from "./SiteSurvey/TaskPage";
import SubtaskPage from "./SiteSurvey/SubtaskPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sitesurvey" component={SiteSurveyPage} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/phase/:id" component={PhasePage} />
        <Route path="/task/:id" component={TaskPage} />
        <Route path="/subtask/:id" component={SubtaskPage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-us" to="/about" />
        <Redirect from="/about/*" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
