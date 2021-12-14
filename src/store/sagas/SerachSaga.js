import { SEARCH } from "../actions/AllActionsTypes";

import { getSearchResult } from "../services/api";

import { getSearchSuccess, getSearchFailure } from "../actions/SearchAction";

import { takeEvery, put, call } from "redux-saga/effects";

function* searchUrl({ searchLeters }) {
  try {
    const { data } = yield call(getSearchResult, searchLeters);

    if (data) {
      yield put(getSearchSuccess(data));
    }
  } catch (error) {
    yield put(getSearchFailure(error));
  }
}

export function* GetSearchUrl() {
  yield takeEvery(SEARCH, searchUrl);
}
