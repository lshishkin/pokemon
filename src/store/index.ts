import { combineReducers, Reducer } from "redux";
import pokemonsReducer from "../components/pokemons/reducer";
import pokemonReducer from "../components/pokemon/reducer";
import abilityReducer from "../components/ability/reducer";
import { IApplicationState } from "./types";

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>(
  {
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
    ability: abilityReducer
  }
);

export default reducers;
