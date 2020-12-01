import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

function Home() {
  return (
    <Header title="amazing recipes">
      <Link
        to="/recipes"
        className="text-uppercase btn btn-secondary btn-lg mt-3"
      >
        search recipes
      </Link>
    </Header>
  );
}

export default Home;
