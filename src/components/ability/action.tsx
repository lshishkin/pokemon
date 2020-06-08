import { GET_ABILITY } from "../../utils/constants";
import { RequestState } from "../../utils/constants";
import { setLoad } from "../pokemons/action";

export const getAbility = (id: any) => (dispatch: any) => {
  dispatch(setLoad(true));
  fetch(`https://pokeapi.co/api/v2/ability/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_ABILITY + RequestState.SUCCESS, payload: json });
    })
    .catch(error => {
      dispatch({ type: GET_ABILITY + RequestState.FAIL });
    });
};
