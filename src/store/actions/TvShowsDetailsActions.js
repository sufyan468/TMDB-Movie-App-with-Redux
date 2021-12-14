import {
  GET_TVSHOWS_DETAILS,
  GET_TVSHOWS_DETAILS_SUCCESS,
  GET_TVSHOWS_DETAILS_FAILURE,
} from "./AllActionsTypes";

export const getTvDetail = (tvId) => {
  return {
    type: GET_TVSHOWS_DETAILS,
    tvId: tvId,
  };
};
export const getTvDetailSuccess = (tvDetail) => {
  return {
    type: GET_TVSHOWS_DETAILS_SUCCESS,
    payload: tvDetail,
  };
};
export const getTvDetailFailure = (error) => {
  return {
    type: GET_TVSHOWS_DETAILS_FAILURE,
    payload: error,
  };
};
