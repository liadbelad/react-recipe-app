import React, { Component } from "react";
import RecipeList from "../components/recipeList/RecipeList";
import Search from "../components/searchRecipe/SearchRecipe";
import { recipeData } from "../data/tempList";
export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    recipes: [],
    search: "",
    url: "https://forkify-api.herokuapp.com/api/search?q=pizza",
    base_url: "https://forkify-api.herokuapp.com/api/search?",
    query: "&q=",
    error: "",
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (data.status >= "200" && data.status < "400") {
        this.setState({
          recipes: jsonData.recipes,
          error: "",
        });
      } else {
        this.setState({
          error:
            "sorry but your search did not return any recipes, please try again",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: "",
      },
      () => this.getRecipes()
    );
  };
  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
