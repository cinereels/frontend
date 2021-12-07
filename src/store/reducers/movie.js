import { MOVIE_SUCCESS, SET_MOVIES } from "../action-types";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case MOVIE_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
