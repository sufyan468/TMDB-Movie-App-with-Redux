import {
  GET_MOVIES_REVIEW,
  GET_MOVIES_REVIEW_SUCCESS,
  GET_MOVIES_REVIEW_FAILURE,
} from "./AllActionsTypes";

export const getMovieReview = (reviewId) => {
  return {
    type: GET_MOVIES_REVIEW,
    reviewId: reviewId,
  };
};
export const getMovieReviewSuccess = (reviewData) => {
  return {
    type: GET_MOVIES_REVIEW_SUCCESS,
    payload: reviewData,
  };
};
export const getMovieReviewFailure = (error) => {
  return {
    type: GET_MOVIES_REVIEW_FAILURE,
    payload: error,
  };
};
