import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CategoryPage from "./SiteSurvey/CategoriesPage";
// import Sections from "./SiteSurvey/SectionsPage";
// import Tasks from "./SiteSurvey/TasksPage";
// import SubTasks from "./SiteSurvey/SubTasksPage";
// import SubTaskItem from "./SiteSurvey/SubTaskItem";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sitesurvey" component={CategoryPage} />
        {/* <Route path="category/:id" component={Sections} />
        <Route path="tasks/:id" component={Tasks} />
        <Route path="subTasks/:id" component={SubTasks} />
        <Route path="subTaskItem/:id" component={SubTaskItem} /> */}
        <Route path="/about" component={AboutPage} />
        {/* <NotFoundRoute handler={require("./components/notFoundPage")} /> */}
        <Route component={PageNotFound} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
        <Redirect from="about/*" to="about" />
      </Switch>
    </div>
  );
}

export default App;
