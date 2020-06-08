import { GET_POKEMON } from "../../utils/constants";
import { RequestState } from "../../utils/constants";
import { setLoad } from "../pokemons/action";

export const getPokemon = (id: any) => (dispatch: any) => {
  dispatch(setLoad(true));
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_POKEMON + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_POKEMON + RequestState.FAIL });
    });
};
