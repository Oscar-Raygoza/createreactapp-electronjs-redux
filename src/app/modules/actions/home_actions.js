import { types } from "../types";

export const loading = () =>
  async function loading(dispatch) {
    dispatch({
      type: types.LOADING,
      payload: true
    });
  };
