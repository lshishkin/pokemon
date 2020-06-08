import {
  GET_POKEMONS,
  SET_LOAD
} from "../../utils/constants";
import { RequestState } from "../../utils/constants";
import { PokemonInterface, SetLoadInterface } from "./types";
import { Dispatch } from "redux";

export const getPokemons = () => (dispatch: any) => {
  dispatch(setLoad(true));
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_POKEMONS + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_POKEMONS + RequestState.FAIL });
    });
};

export const setLoad = (status: boolean) => (
  dispatch: Dispatch<SetLoadInterface>
) => {
  dispatch({ type: SET_LOAD, payload: status });
};
