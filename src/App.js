import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
