import { Reducer } from "redux";
import { RequestState, GET_POKEMON } from "../../utils/constants";
const initialState = { pokemon: "" };

const pokemonReducer: Reducer<any, { type: string; payload: any }> = (
  data = initialState,
  action
) => {
  switch (action.type) {
    case GET_POKEMON + RequestState.SUCCESS: {
      return {
        ...data,
        pokemon: action.payload
      };
    }
    case GET_POKEMON + RequestState.FAIL: {
      return { ...data, pokemon: "" };
    }

    default:
      return data;
  }
};

export default pokemonReducer;
