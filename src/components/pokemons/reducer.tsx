import { Reducer } from "redux";
import {
  RequestState,
  GET_POKEMONS,
} from "../../utils/constants";
import { PokemonsReducerInterface } from "./types";
const initialState = { pokemons: [] };

const pokemonReducer: Reducer<
  PokemonsReducerInterface,
  { type: string; payload: any }
> = (data = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS + RequestState.SUCCESS: {
      return {
        ...data,
        pokemons: action.payload.results,
      };
    }
    case GET_POKEMONS + RequestState.FAIL: {
      return { ...data, pokemons: [] };
    }

    default:
      return data;
  }
};

export default pokemonReducer;
