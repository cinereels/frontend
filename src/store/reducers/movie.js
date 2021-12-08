import { MOVIE_SUCCESS, SET_MOVIES, ADD_MOVIE_GALLERY, REMOVE_MOVIE_GALLERY } from "../action-types";

const initialState = {
  movies: [],
  gallery: [],
  ids: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_MOVIE_GALLERY:
      return {
        ...state,
        gallery: [...state.gallery, action.galleryItem],
        ids: [...state.ids, action.galleryItem.id],
      }
    case REMOVE_MOVIE_GALLERY:
      const updatedGallery = state.gallery.filter(g => g.id === action.galleryId);
      const updatedIds = state.ids.filter(i => i === action.galleryId);
      return {
        ...state,
        gallery: updatedGallery,
        ids: updatedIds,
      }
    case MOVIE_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
