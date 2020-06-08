import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Pokemons from "./components/pokemons";
import Pokemon from "./components/pokemon";
import Ability from "./components/ability";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pokemons />
        </Route>
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Route path="/ability/:id">
          <Ability />
        </Route>
      </Switch>
    </Router>
  );
}
