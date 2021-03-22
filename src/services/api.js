import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'bf08c0c07642287cbabe383c02818eb3';

const fetchTrends = () => {
  return axios
    .get(`/trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = id => {
  return axios
    .get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

const fetchMovieActors = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.cast);
};

const fetchMovieReviews = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.results);
};

const fetchByKeyWord = query => {
  return axios
    .get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then(response => response.data);
};

const apiService = {
  fetchTrends,
  fetchMovieDetails,
  fetchMovieActors,
  fetchMovieReviews,
  fetchByKeyWord,
};

export default apiService;
