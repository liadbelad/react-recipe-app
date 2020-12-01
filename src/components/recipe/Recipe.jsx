import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  const { image_url, title, source_url, publisher, recipe_id } = recipe;

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <img
          className="img-card-top"
          src={image_url}
          style={{ height: "14rem" }}
          alt="recipe"
        />
        <div className="card-body text-capitalize">
          <h6>{title}</h6>
          <h6 className="text-warning text-slanted">
            provided by {publisher}{" "}
          </h6>
        </div>
        <div className="card-footer">
          <Link
            to={`/recipes/${recipe_id}`}
            className="btn btn-primary text-capitalize "
          >
            details
          </Link>
          <a
            className="btn btn-success mx-2 text-capitalize"
            href={source_url}
            target="_blank"
            rel="noreferrer"
          >
            recipe url
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
