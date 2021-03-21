import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import apiService from '../services/api';
import Spinner from '../components/Spinner';
import Container from '../components/Container';
import MovieList from '../components/MovieList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(ptrevProp, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, error: null });

      const { results } = await apiService.fetchByKeyWord(this.state.query);
      this.setState({ movies: results, isLoading: false });

      if (results.length === 0) {
        this.setState({ error: 'Nothing was found, specify your query' });
      }
    }
  }

  onChangeQuery = query => {
    this.setState({ query });
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.onChangeQuery} />
        {isLoading && <Spinner />}
        {movies.length > 0 && <MovieList movies={movies} />}
        {error && <p>{error}</p>}
      </Container>
    );
  }
}

export default MoviesPage;
