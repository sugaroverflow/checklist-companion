import React from "react";
import { NavLink } from "react-router-dom";
//import PropTypes from "prop-types";
const ChecklistitemApi = require("../../api/checklistItemApi");

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    this.setState({ categories: ChecklistitemApi.getAllChecklistitems() });
  }
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{this.state.categories.map(CreateCategoryRow, this)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function CreateCategoryRow(category) {
  return (
    <tr key={category.id}>
      <td>
        <NavLink to="SectionsPage" params={{ id: category.id }}>
          {category.id}
        </NavLink>
      </td>
      <td>{category.titleEng}</td>
      <td>{category.descEng}</td>
    </tr>
  );
}

export default CategoryPage;
