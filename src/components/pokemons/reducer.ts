import { Reducer } from "redux";
import {
  RequestState,
  GET_POKEMONS,
  SET_LOAD
} from "../../utils/constants";
import { PokemonInterface } from "./types";
import { PokemonReducerIntrtface } from "../../store/types";
const initialState = { pokemons: [], load: false };

const pokemonReducer: Reducer<
PokemonReducerIntrtface,
  { type: string; payload: any }
> = (data = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS + RequestState.SUCCESS: {
      return {
        ...data,
        pokemons: action.payload.results,
        count: action.payload.count,
        load: false
      };
    }
    case GET_POKEMONS + RequestState.FAIL: {
      return { ...data, pokemons: [], load: false };
    }

    case SET_LOAD: {
      return { ...data, load: action.payload };
    }

    default:
      return data;
  }
};

export default pokemonReducer;
