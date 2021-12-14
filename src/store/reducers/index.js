import { combineReducers } from "redux";

import { movieReducer } from "./MovieReducer";
import { UpcommingReducer } from "./UpcommingReducer";
import { TrendingReducer } from "./TrendingReducer";
import { tvshowsReducer } from "./TvshowsReducer";
import { peopleReducer } from "./PeopleReducer";
import { MovieDetailReducer } from "./MovieDetailReducer";
import { tvDetailReducer } from "./TvShowsDetailsReducer";
import { peopleDetailReducer } from "./PeopleDetailReducer";
import { moviewReviwReducer } from "./MoviewReviewReducer";
import { tvShowReviewReducer } from "./TvshowReviewReducer";
import { searchReducer } from "./SearchReducer";
const allReducers = combineReducers({
  movie: movieReducer,
  upcoming: UpcommingReducer,
  trending: TrendingReducer,
  tvshows: tvshowsReducer,
  people: peopleReducer,
  movieDetail: MovieDetailReducer,
  tvDetail: tvDetailReducer,
  peopleDetail: peopleDetailReducer,
  movieReview: moviewReviwReducer,
  tvReview: tvShowReviewReducer,
  searchData: searchReducer,
});
export default allReducers;
