import { Dispatch } from "redux";
import { GET_ABILITY } from "../../utils/constants";
import { RequestState } from "../../utils/constants";

export const getAbility = (id: string) => (dispatch: Dispatch<{ type: string, payload?: any }>) => {
  fetch(`https://pokeapi.co/api/v2/ability/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_ABILITY + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_ABILITY + RequestState.FAIL });
    });
};
