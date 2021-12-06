import axios from "../../axios-config";
import * as actionTypes from "../action-types";

export const postMovie = (movieData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("movie", movieData);
      console.log("movie response data", response.data);
      dispatch(response);
    } catch (e) {
      throw e;
    }
  };
};
