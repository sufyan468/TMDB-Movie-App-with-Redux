import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const key = "cf8efa772446e21fdc38a89b6512c967";

//All Movies API
const DiscoverApiUrl = `${API_BASE_URL}/discover/movie?api_key=${key}`;

//Upcomming Movies API
const UpcommingsApiUrl = `${API_BASE_URL}/movie/upcoming?api_key=${key}`;

//Trending Movies Api
const TrendingsApiUrl = `${API_BASE_URL}/trending/all/day?api_key=${key}`;

//TVshow Api
const TVShowsApiUrl = `${API_BASE_URL}/tv/popular?api_key=${key}`;

//People API
const PeopleApiUrl = `${API_BASE_URL}/person/popular?api_key=${key}`;

//AllDiscover Api
export const getAllDiscovers = async () => {
  const data = await axios.get(DiscoverApiUrl);
  return data;
};

//AllUpcommings API
export const getAllUpcomingsUrl = async () => {
  const data = await axios.get(UpcommingsApiUrl);
  return data;
};

//Trendings Movies API
export const getAllTrendingsUrl = async () => {
  const data = await axios.get(TrendingsApiUrl);
  return data;
};

//TVShows API
export const getAllTvShowsUrl = async () => {
  const data = await axios.get(TVShowsApiUrl);
  return data;
};

//People API
export const getAllPeopleUrl = async () => {
  const data = await axios.get(PeopleApiUrl);
  return data;
};

export const getMovieDetailUrl = async (id) => {
  const movieDetail = `${API_BASE_URL}/movie/${id}?api_key=${key}&language=en-US`;

  const data = await axios.get(movieDetail);
  return data;
};

export const getTvDetailUrl = (id) => {
  const movieDetail = `${API_BASE_URL}/tv/${id}?api_key=${key}`;

  const data = axios.get(movieDetail);
  return data;
};

export const getPeopleDetails = async (id) => {
  const peopleDetail = `${API_BASE_URL}/person/${id}?api_key=${key}&language=en-US`;

  const data = await axios.get(peopleDetail);
  return data;
};

export const getMovieReview = async (reviewId) => {
  const MovieReview = `${API_BASE_URL}/movie/${reviewId}/reviews?api_key=${key}`;

  const data = await axios.get(MovieReview);
  return data;
};

export const getTvReview = async (tvReviewId) => {
  const TvReview = `${API_BASE_URL}/tv/${tvReviewId}/reviews?api_key=${key}`;

  const data = await axios.get(TvReview);
  return data;
};

export const getSearchResult = async (query) => {
  const multiSearch = `${API_BASE_URL}/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

  const data = await axios.get(multiSearch);
  return data;
};
