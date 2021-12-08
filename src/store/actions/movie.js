import axios from "../../axios-config";
import { header } from "../../utility/header-config";
import { ADD_MOVIE_GALLERY, MOVIE_SUCCESS, REMOVE_MOVIE_GALLERY, SET_MOVIES } from "../action-types";

const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies,
  };
};
const movieSuccess = () => {
  return {
    type: MOVIE_SUCCESS,
  };
};

export const fetchMovies = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("movie", header(token));
      const { movies } = response.data;
      console.log(movies);
      dispatch(setMovies(movies));
    } catch (err) {
      throw err;
    }
  };
};

export const addMovie = (token, movie) => {
  return async (dispatch) => {
    try {
      await axios.post("movie", movie, header(token));
      dispatch(movieSuccess());
    } catch (err) {
      throw err;
    }
  };
};


export const updateMovie = (token, id, movie) => {
  return async (dispatch) => {
    try {
      await axios.put("movie/" + id, movie, header(token));
      dispatch(movieSuccess());
    } catch (err) {
      throw err;
    }
  };
};

export const deleteMovie = (token, id) => {
  return async (dispatch) => {
    try {
      await axios.delete("movie/" + id, header(token));
      dispatch(movieSuccess());
    } catch (err) {
      throw err;
    }
  };
};


export const addMovieGallery = (token, galleryData) => {
  return async dispatch => {
    try {
      const response = await axios.post('gallery', galleryData, header(token));
      const { gallery } = response.data;
      dispatch(addMovieGallerySuccess(gallery))
    } catch (err) {
      throw err;
    }
  }
}

const addMovieGallerySuccess = (gallery) => {
  return {
    type: ADD_MOVIE_GALLERY,
    galleryItem: gallery,
  }
}

export const removeMovieGallery = (token, id) => {
  return async dispatch => {
    try {
      await axios.delete('gallery/' + id, header(token));
      dispatch(removeMovieGallerySuccess(id));
    } catch (err) {
      throw err;
    }
  }
}

const removeMovieGallerySuccess = (id) => {
  return {
    type: REMOVE_MOVIE_GALLERY,
    galleryId: id,
  }
}