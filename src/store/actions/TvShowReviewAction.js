import {
  TVSHOW_REVIEW,
  TVSHOW_REVIEW_SUCCESS,
  TVSHOW_REVIEW_FAILURE,
} from "./AllActionsTypes";

export const getTvShowReview = (tvRId) => {
  return {
    type: TVSHOW_REVIEW,
    tvRId: tvRId,
  };
};
export const getTvShowReviewSuccess = (tvReviewData) => {
  return {
    type: TVSHOW_REVIEW_SUCCESS,
    payload: tvReviewData,
  };
};
export const getTvShowReviewFailure = (error) => {
  return {
    type: TVSHOW_REVIEW_FAILURE,
    payload: error,
  };
};
