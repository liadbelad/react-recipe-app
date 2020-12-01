import React, { useState } from "react";
import RecipeList from "../components/recipeList/RecipeList";
import SearchRecipe from "../components/searchRecipe/SearchRecipe";
import { recipeData } from "../data/tempList";
function Recipes(props) {
  const [recipes, setRecipes] = useState(recipeData);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SearchRecipe
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default Recipes;
