import { Reducer } from "redux";
import { RequestState, GET_ABILITY } from "../../utils/constants";
import { AbilityReducerInterface } from "./types";
const initialState = { ability: null };

const abilityReducer: Reducer<AbilityReducerInterface, { type: string; payload: any }> = (
  data = initialState,
  action
) => {
  switch (action.type) {
    case GET_ABILITY + RequestState.SUCCESS: {
      return {
        ...data,
        ability: action.payload
      };
    }
    case GET_ABILITY + RequestState.FAIL: {
      return { ...data, ability: '' };
    }

    default:
      return data;
  }
};

export default abilityReducer;
