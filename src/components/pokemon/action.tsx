import { Dispatch } from "redux";
import { GET_POKEMON } from "../../utils/constants";
import { RequestState } from "../../utils/constants";

export const getPokemon = (id: string) => (dispatch: Dispatch<{ type: string, payload?: any }>) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_POKEMON + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_POKEMON + RequestState.FAIL });
    });
};
