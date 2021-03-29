import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'bf08c0c07642287cbabe383c02818eb3';

export const fetchTrends = () => {
  return axios
    .get(`/trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

export const fetchMovieDetails = id => {
  return axios
    .get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

export const fetchMovieActors = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.cast);
};

export const fetchMovieReviews = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.results);
};

export const fetchByKeyWord = query => {
  return axios
    .get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then(response => response.data);
};
