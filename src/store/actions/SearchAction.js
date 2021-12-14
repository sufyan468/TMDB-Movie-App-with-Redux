import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./AllActionsTypes";

export const getSearch = (searchLeters) => {
  return {
    type: SEARCH,
    searchLeters: searchLeters,
  };
};
export const getSearchSuccess = (searchData) => {
  return {
    type: SEARCH_SUCCESS,
    payload: searchData,
  };
};
export const getSearchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    payload: error,
  };
};
