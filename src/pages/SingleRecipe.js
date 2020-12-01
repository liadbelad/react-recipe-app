import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { recipeData } from "../data/tempDetails";

function SingleRecipe(props) {
  const [recipe, setRecipe] = useState({});
  const [id, setID] = useState(props.match.params.id);
  const [loading, setLoading] = useState(true);

  const {
    image_url,
    publisher_url,
    source_url,
    title,
    ingredients,
    publisher,
  } = recipe;

  const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;

  const fetchRecipe = async () => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setRecipe(responseData.recipe);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2 className="text-uppercase text-orange text-center">
              Loading recipe...
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">
            back to recipes list
          </Link>
          <img
            src={image_url}
            className="d-block w-100 "
            style={{ maxHeight: "30rem" }}
            alt="recipe"
          />
        </div>
        {/* info */}
        <div className="col-10 mx-auto col-md-6 my-3">
          <h6 className="text-uppercase"> {title} </h6>
          <h6 className="text-warning text-capitalize text-slanted">
            Provided by {publisher}
          </h6>
          <a
            href={publisher_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-2 text-capitalize"
          >
            publisher webpage
          </a>
          <a
            href={source_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success mt-2 mx-2 text-capitalize"
          >
            recipe url
          </a>
          <ul className="list-group mt-4">
            <h2 className="mt-3 mb-4">Ingredients</h2>
            {ingredients.map((ingredient, idx) => {
              return (
                <li key={id} className="list-group-item text-slanted">
                  {" "}
                  {ingredient}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
