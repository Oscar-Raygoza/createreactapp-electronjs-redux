import { types } from "../types";

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
