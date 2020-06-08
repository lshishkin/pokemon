import { Reducer } from "redux";
import { RequestState, GET_ABILITY } from "../../utils/constants";
const initialState = { ability: {} };

const abilityReducer: Reducer<any, { type: string; payload: any }> = (
  data = initialState,
  action
) => {
  switch (action.type) {
    case GET_ABILITY + RequestState.SUCCESS: {
      console.log(action.payload);
      return {
        ...data,
        ability: action.payload
      };
    }
    case GET_ABILITY + RequestState.FAIL: {
      return { ...data, ability: {} };
    }

    default:
      return data;
  }
};

export default abilityReducer;
