import { Dispatch } from "redux";
import {
  GET_POKEMONS,
} from "../../utils/constants";
import { RequestState } from "../../utils/constants";


export const getPokemons = () => (dispatch: Dispatch<{ type: string, payload?: any }>) => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_POKEMONS + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_POKEMONS + RequestState.FAIL });
    });
};
