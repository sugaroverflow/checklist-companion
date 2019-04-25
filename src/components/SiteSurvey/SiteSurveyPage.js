import React from "react";
const CategoryApi = require("../../API/SiteSurveyApi").CategoryApi;
import CategoryCard from "./CategoryCard";

class SiteSurveyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    this.setState({ categories: CategoryApi.getAllCategories() });
  }
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>
          {this.state.categories.map(category => (
            <CategoryCard key={category.category_id} category={category} />
          ))}
        </div>
      </div>
    );
  }
}

export default SiteSurveyPage;
