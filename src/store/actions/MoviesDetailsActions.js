import {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from "./AllActionsTypes";

export const getMovieDetail = (movieId) => {
  return {
    type: GET_MOVIE_DETAILS,
    movieId: movieId,
  };
};
export const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: movieDetail,
  };
};
export const getMovieDetailFailure = (error) => {
  return {
    type: GET_MOVIE_DETAILS_FAILURE,
    payload: error,
  };
};
